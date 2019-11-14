import decode from "jwt-decode";
import setupDB, { getToken } from "./StorageIndexedDB";

export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    // Checking if token is expired
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

export default async () => {
  const token = (await setupDB().then(db => getToken(db))) || null;
  return !!token && !isTokenExpired(token);
};
