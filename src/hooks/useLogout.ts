import {authenticationService} from '../services/auth';

export const useLogout = () => {
  const handleLogout = async () => {
    try {
      await authenticationService.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {handleLogout};
};
