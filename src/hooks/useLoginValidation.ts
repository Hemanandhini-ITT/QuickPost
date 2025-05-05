import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const useLoginValidation = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  return yupResolver(validationSchema);
};

export default useLoginValidation;
