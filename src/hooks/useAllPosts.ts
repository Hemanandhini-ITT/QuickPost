import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {PostDataWithId} from '../components/Profile/profile.types';

export default function useAllPosts() {
  const [posts, setPosts] = useState<PostDataWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        snapshot => {
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
          setLoading(false);
        },
        error => {
          console.error(error);
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, []);

  return {posts, loading};
}
