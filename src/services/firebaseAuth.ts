import auth from '@react-native-firebase/auth';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password,
    );
    return userCredential;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return userCredential;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
};
