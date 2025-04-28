import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface PostData {
  title: string;
  content: string;
  userId: string;
  userEmail: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

export interface PostDataWithId extends PostData {
  id: string;
}
