import { useState } from 'react';
import { authenticationService } from '../services/auth';

export const useSignup = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (email: string, password: string) => {
    try {
      setError(null);
      await authenticationService.signUp(email, password);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return {
    handleSignup,
    error,
    setError,
  };
};
