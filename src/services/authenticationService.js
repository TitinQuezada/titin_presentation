import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Collections } from '../enums/collections';
import { GetAllDocuments } from '../helpers/CloudFireStoreHelper';

class AuthenticationService {
  Authenticate = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: 'select_account',
      });

      const { user } = await firebase.auth().signInWithPopup(provider);

      const profiles = await GetAllDocuments(Collections.profiles);

      const profile = profiles.find((profile) => profile.email === user.email);

      if (!profile) {
        const error = {
          message: `${user.displayName} no tiene permiso para ingresar al sistema`,
        };

        throw error;
      }
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user') {
        throw error;
      } else {
        const error = {
          message: `Debe iniciar session para continuar`,
        };

        throw error;
      }
    }
  };

  IsAuthenticate = async () => {
    const user = await firebase.auth().currentUser;

    if (user) {
      return this._IsAuthorizeUser(user);
    }

    return false;
  };

  _IsAuthorizeUser = async (user) => {
    const profiles = await GetAllDocuments(Collections.profiles);

    const profile = profiles.find((profile) => profile.email === user.email);

    if (profile) {
      return true;
    }

    return false;
  };

  LogOut = async () => {
    await firebase.auth().signOut();
  };
}

export default new AuthenticationService();
