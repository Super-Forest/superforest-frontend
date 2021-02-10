import { TOKEN } from "constant";

export const checkEmailValid = (email: string) => {
  if (!!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@supertree.co*$/gim)) return true;
  return false;
};

export const saveToken = (token: string | null, setIsLoggedIn: Function, setAuthToken: Function) => {
  sessionStorage.setItem(TOKEN, token as string);
  setIsLoggedIn(true);
  setAuthToken(token);
}