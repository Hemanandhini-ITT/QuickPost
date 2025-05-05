import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import {useForm} from 'react-hook-form';
import usePostValidation from './usePostValidation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/navigation.types';
import {PostData} from '../components/CreatePost/createPost.types';
import {showToast} from '../utils/toastConst';
import useAuthUser from './useAuthUser';

export default function usePostForm() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<PostData>({
    resolver: usePostValidation(),
  });
  const {user} = useAuthUser();
  const onSuccess = () => {
    showToast(
      'success',
      'Post created successfully',
      'Your post has been saved!',
    );
    reset();
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeTabs'}],
    });
  };

  const onSubmit = async (data: PostData) => {
    try {
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

      onSuccess();
    } catch (error) {
      showToast('error', 'Error', 'Something went wrong!');
      console.error(error);
    }
  };

  return {control, handleSubmit, errors, onSubmit};
}
