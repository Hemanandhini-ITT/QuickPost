import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const usePostValidation = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
  });

  return yupResolver(validationSchema);
};

export default usePostValidation;
