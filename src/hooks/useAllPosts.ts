import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../utils/toastConst';
import {PostDataWithId} from '../components/Profile/profile.types';

export default function useAllPosts() {
  const [posts, setPosts] = useState<PostDataWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPosts = firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot => {
          try {
            const allPosts = snapshot.docs.map(doc => {
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
            setPosts(allPosts);
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
            'Unable to fetch posts. Please try again later.',
          );
          setLoading(false);
        },
      );

    return () => getAllPosts();
  }, []);

  return {posts, loading};
}
