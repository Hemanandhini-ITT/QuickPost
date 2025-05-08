import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {showToast} from '../utils/toastConst';
import { PostWithLikeStatus} from '../components/Profile/profile.types';
import auth from '@react-native-firebase/auth';

export default function useAllPosts() {
  const [posts, setPosts] = useState<PostWithLikeStatus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        async snapshot => {
          try {
            const currentUser = auth().currentUser;

            const postsData: PostWithLikeStatus[] = await Promise.all(
              snapshot.docs.map(async doc => {
                const data = doc.data();
                const likesSnapshot = await firestore()
                  .collection('posts')
                  .doc(doc.id)
                  .collection('likes')
                  .doc(currentUser?.uid)
                  .get();

                const likedByCurrentUser = likesSnapshot.exists;

                const commentsSnapshot = await firestore()
                .collection('posts')
                .doc(doc.id)
                .collection('comments')
                .orderBy('createdAt', 'desc')
                .get();

              const comments = commentsSnapshot.docs.map(commentDoc => {
                const commentData = commentDoc.data();
                return {
                  id: commentDoc.id,
                  text: commentData.text,
                  userId: commentData.userId,
                  userEmail: commentData.userEmail,
                  createdAt: commentData.createdAt,
                };
              });


                return {
                  id: doc.id,
                  title: data.title,
                  content: data.content,
                  userId: data.userId,
                  userEmail: data.userEmail,
                  createdAt: data.createdAt,
                  likeCount: data.likeCount ?? 0,
                  commentCount: data.commentCount ?? 0,
                  likedByCurrentUser,
                  comments,
                };
              }),
            );

            setPosts(postsData);
          } catch (err) {
            console.error('Error parsing posts:', err);
            showToast('error', 'Error', 'Failed to fetch posts');
          } finally {
            setLoading(false);
          }
        },
        error => {
          console.error('Firestore error:', error);
          showToast('error', 'Error', 'Could not load posts');
          setLoading(false);
        },
      );

    return () => unsubscribe();
  }, []);

  return {posts, loading};
}

