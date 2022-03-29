import { auth } from "../firebase";

export const firebaseSignUp = async (email, password) => {
  const userCredential = await auth.createUserWithEmailAndPassword(email, password);
  const userId = await userCredential.user.uid;
  return userId;
};

export const firebaseLogIn = async (email, password) => {
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  const userId = await userCredential.user.uid;
  return userId;
};
