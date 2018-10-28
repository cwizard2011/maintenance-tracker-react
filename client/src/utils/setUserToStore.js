import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import Authentication, { setCurrentUser } from '../actions/AuthActions';

const setCurrentUserToStore = (store) => {
  const token = Cookie.get('jwtToken');
  if (token) {
    const decodedToken = jwt.decode(token);

    try {
      const isExpired = (decodedToken.exp < (Date.now() / 1000));
      if (!isExpired) {
        store.dispatch(setCurrentUser(decodedToken));
      } else {
        store.dispatch(Authentication.logout());
      }
    } catch (err) {
      store.dispatch(Authentication.logout());
    }
  }
};

export default setCurrentUserToStore;
