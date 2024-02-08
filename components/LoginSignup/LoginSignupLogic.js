import { FIREBASE_AUTH } from "../../firebase/firebaseconfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const handleLogin = async (values, isLoginMode) => {
  const { email, password } = values;
  try {
    if (isLoginMode) {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Login successful:", user);
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered with ID: ", user.uid);
    }
  } catch (error) {
    console.log("Error regisering user: ", error);
  }
};

const toggleMode = (isLoginMode, setIsLoginMode) => {
  setIsLoginMode((prevMode) => !prevMode);
};

export { handleLogin, toggleMode };
