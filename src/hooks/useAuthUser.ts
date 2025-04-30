import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function useAuthUser() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return {user};
}
