import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const useSignupValidation = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm Password is required'),
  });

  return yupResolver(validationSchema);
};

export default useSignupValidation;
