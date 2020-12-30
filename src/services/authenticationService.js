import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Collections } from '../enums/collections';
import { GetAllDocuments } from '../helpers/CloudFireStoreHelper';

class AuthenticationService {
  Authenticate = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      const { user } = await firebase.auth().signInWithPopup(provider);

      const profiles = await GetAllDocuments(Collections.profiles);

      const profile = profiles.find((x) => x.email === user.email);

      if (!profile) {
        const error = {
          message: `${user.displayName} no tiene permiso para ingresar al sistema`,
        };

        throw error;
      }
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user') {
        throw error;
      }
    }
  };
}

export default new AuthenticationService();
