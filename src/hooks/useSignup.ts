import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {authenticationService} from '../services/auth';
import useSignupValidation from './useSignupValidation';
import { SignupFormData } from '../screens/Signup/signup.types';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupFormData>({
    resolver: useSignupValidation(),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      setError(null);
      await authenticationService.signUp(data.email.trim(), data.password);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    error,
  };
};
