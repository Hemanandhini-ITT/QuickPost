import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const toggleLikePost = async (postId: string) => {
  const userId = auth().currentUser?.uid;
  if (!userId) {
    throw new Error('User not authenticated');
  }

  const likeRef = firestore()
    .collection('posts')
    .doc(postId)
    .collection('likes')
    .doc(userId);

  const postRef = firestore().collection('posts').doc(postId);

  const likeDoc = await likeRef.get();

  await firestore().runTransaction(async transaction => {
    if (likeDoc.exists) {
      transaction.delete(likeRef);
      transaction.update(postRef, {
        likeCount: firestore.FieldValue.increment(-1),
      });
    } else {
      transaction.set(likeRef, {liked: true});
      transaction.update(postRef, {
        likeCount: firestore.FieldValue.increment(1),
      });
    }
  });
};

export const addComment = async (postId: string, text: string) => {
  const userId = auth().currentUser?.uid;
  const userEmail = auth().currentUser?.email;
  if (!userId || !userEmail) {
    return;
  }

  await firestore().collection('posts').doc(postId).collection('comments').add({
    text,
    userId,
    userEmail,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });

  await firestore()
  .collection('posts')
  .doc(postId)
  .update({
    commentCount: firestore.FieldValue.increment(1),
  });
};

