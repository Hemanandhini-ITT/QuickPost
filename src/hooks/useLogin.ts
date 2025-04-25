import { useState } from 'react';
import { authenticationService } from '../services/auth';

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      setError(null);
      await authenticationService.signIn(email.trim(), password);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return {
    handleLogin,
    error,
  };
};
