import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {authenticationService} from '../services/auth';
import { LoginFormData } from '../screens/Login/login.types';
import useLoginValidation from './useLoginValidation';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>({
    resolver: useLoginValidation(),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setError(null);
      await authenticationService.signIn(data.email.trim(), data.password);
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
