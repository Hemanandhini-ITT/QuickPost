import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {showToast} from '../utils/toastConst';
import {PostDataWithId} from '../components/Profile/profile.types';

export default function useUserPosts() {
  const [posts, setPosts] = useState<PostDataWithId[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  useEffect(() => {
    const user = auth().currentUser;

    if (!user) {
      setLoading(false);
      return;
    }

    const unsubscribe = firestore()
      .collection('posts')
      .where('userEmail', '==', user.email)
      .onSnapshot(
        snapshot => {
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
          setLoading(false);
        },
        error => {
          console.error(error);
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, []);

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

  const handleDeletePress = (postId: string) => {
    setPostToDelete(postId);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (postToDelete) {
      deletePost(postToDelete);
    }
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
