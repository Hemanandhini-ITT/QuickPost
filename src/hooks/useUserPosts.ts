import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../utils/toastConst';
import {PostDataWithId} from '../components/Profile/profile.types';
import useAuthUser from './useAuthUser';

export default function useUserPosts() {
  const [posts, setPosts] = useState<PostDataWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const {user, loading: authLoading} = useAuthUser();

  useEffect(() => {
    if (authLoading) {
      return;
    }
    if (!user) {
      showToast('error', 'Error', 'User not authenticated');
      setLoading(false);
      return;
    }

    const getUserPosts = firestore()
      .collection('posts')
      .where('userEmail', '==', user.email)
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot => {
          try {
            const userPosts = snapshot.docs.map(doc => {
              const data = doc.data() as PostDataWithId;
              return {
                id: doc.id,
                title: data.title,
                content: data.content,
                userId: data.userId,
                userEmail: data.userEmail,
                createdAt: data.createdAt,
              };
            });
            setPosts(userPosts);
          } catch (err) {
            console.error('Snapshot parsing error:', err);
            showToast('error', 'Error', 'Failed to parse post data');
          } finally {
            setLoading(false);
          }
        },
        error => {
          console.error('Firestore snapshot error:', error);
          showToast(
            'error',
            'Error',
            'Unable to fetch posts. Try again later.',
          );
          setLoading(false);
        },
      );

    return () => getUserPosts();
  }, [authLoading, user]);

  const deletePost = async (postId: string) => {
    try {
      await firestore().collection('posts').doc(postId).delete();
      showToast('success', 'Deleted', 'Post deleted successfully.');
      setModalVisible(false);
    } catch (error) {
      console.error(error);
      showToast('error', 'Error', 'Failed to delete post.');
    }
  };

  const handleDeletePress = () => {
    setModalVisible(true);
  };

  const handleConfirmDelete = (postId: string) => {
    deletePost(postId);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  return {
    posts,
    loading,
    modalVisible,
    handleDeletePress,
    handleConfirmDelete,
    handleCancelDelete,
  };
}
