import auth from '@react-native-firebase/auth';

class AuthenticationService {
  async signIn(email: string, password: string) {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      return userCredential;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async signUp(email: string, password: string) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      return userCredential;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async signOut() {
    try {
      await auth().signOut();
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async forgotPassword(email: string) {
    try {
      await auth().sendPasswordResetEmail(email);
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }
}

const authenticationService = new AuthenticationService();
export {authenticationService};
