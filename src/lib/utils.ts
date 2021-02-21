import { TOKEN } from "constant";
import { ImageInfo } from "types/imageUpload";
import { readBuilderProgram } from "typescript";

export const checkEmailValid = (email: string) => {
  if (!!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@supertree.co*$/gim)) return true;
  return false;
};

export const saveToken = (token: string | null, setIsLoggedIn: Function, setAuthToken: Function) => {
  sessionStorage.setItem(TOKEN, token as string);
  setIsLoggedIn(true);
  setAuthToken(token);
}

export const capitalize = (str: string) => {
  return str[0].toUpperCase()+str.substr(1);
}

export const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve,reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
  })
}

export const getFileList = async(files: FileList): Promise<Array<ImageInfo>> => {
  const promises: Array<Promise<string>> = [];
  
  for(let i=0;i<files.length;i++) {
    promises.push(getBase64(files[i]));
  }

  try {
    const result = await Promise.all(promises);
    const fileList = result.map((base64, idx) => {
      return {
        name: files[idx].name,
        url: base64
      } as ImageInfo;
    });

    return fileList;
  } catch(error)  {
    throw error;
  }
}