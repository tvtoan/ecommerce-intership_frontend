import decode from 'jwt-decode';
import { getToken } from './StorageMethods';

export const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    // Checking if token is expired
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else {
      return false
    };
  }
  catch (err) {
    return false;
  }
}

export default () => {
  const token = getToken();
  return !!token && !isTokenExpired(token);
}