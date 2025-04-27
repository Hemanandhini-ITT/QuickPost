import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { useForm } from 'react-hook-form';
import usePostValidation from './usePostValidation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../navigation/navigation.types';
import { PostData } from '../components/CreatePost/createPost.types';
import { showToast } from '../utils/toastConst';

export default function usePostForm() {
  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostData>({
    resolver: usePostValidation(),
  });

  const onSubmit = async (data: PostData) => {
    try {
      const user = auth().currentUser;

      if (!user) {
        showToast('error', 'Error', 'User not authenticated');
        return;
      }

      await firestore()
        .collection('posts')
        .add({
          ...data,
          userId: user.uid,
          userEmail: user.email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

      showToast('success', 'Post created successfully', 'Your post has been saved!');
      reset();

      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeTabs' }],
      });
    } catch (error) {
      showToast('error', 'Error', 'Something went wrong!');
      console.error(error);
    }
  };

  return { control, handleSubmit, errors, onSubmit };
}
