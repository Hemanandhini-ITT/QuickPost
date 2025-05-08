import {authenticationService} from '../services/auth';
import {showToast} from '../utils/toastConst';

export const useForgotPassword = () => {
  const handleForgotPassword = async (email: string | null | undefined) => {
    if (!email) {return;}

    try {
      await authenticationService.forgotPassword(email);
      showToast('success', 'Password reset email sent!');
    } catch (error) {
      showToast('error', 'Failed to send reset email.');
      console.error('Forgot password error:', error);
    }
  };

  return {handleForgotPassword};
};
