import { storage } from "../firebase";

export const firebaseUploadImage = async (userId, uri) => {

  const imageName = uri.split("/").pop();
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = await storage.ref().child(`${userId}/${imageName}`);

  const snapshot = await ref.put(blob);
  const url = await snapshot.ref.getDownloadURL();
  return url;
};

export const firebaseDeleteImage = async (url) => {
  const ref = storage.refFromURL(url);
  const unSubscriber = ref
    .delete()
    .then(() => {})
    .catch((error) => {
      console.log("error :", error);
    });
  return unSubscriber;
};
