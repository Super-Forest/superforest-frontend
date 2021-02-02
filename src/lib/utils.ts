export const checkEmailValid = (email: String) => {
  if (!!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@supertree.co*$/gim)) return true;
  return false;
};
