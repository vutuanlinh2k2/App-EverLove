import { storage } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const firebaseUploadImage = async (uri) => {
  const userId = await AsyncStorage.getItem("userId");
  const transformedId = JSON.parse(userId).userId;

  const imageName = uri.split("/").pop();
  const response = await fetch(uri);
  const blob = await response.blob();
  const ref = await storage.ref().child(`${transformedId}/${imageName}`);

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
