import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface PostData {
  title: string;
  content: string;
  userId: string;
  userEmail: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
  likeCount?: number;
  commentCount?: number;
}

export interface PostDataWithId extends PostData {
  id: string;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  userEmail: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

export interface PostWithLikeStatus extends PostDataWithId {
  likedByCurrentUser: boolean;
  comments: Comment[];
}
