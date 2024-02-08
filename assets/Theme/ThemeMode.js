import { FIREBASE_DB } from "../../firebase/firebaseconfig";
import { getDoc, doc } from "firebase/firestore";
import { useState} from "react";

const ThemeMode = () => {
  const [themeMode, setThemeMode] = useState(null);
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const userId = "VtxzLHQ2jc3aro8Dg2Fy"; // Replace with your specific user ID

  // Fetch theme value from Firestore for a specific user when the component mounts
  console.log("Fetching theme mode from Firestore...");
  
  const fetchThemeMode = async () => {
    try {
      const userDocRef = doc(FIREBASE_DB, "users", userId);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        setThemeMode(userData.themeMode);
        console.log("Fetched theme from Firestore:", userData.themeMode);
      }

      setInitialFetchDone(true);
    } catch (error) {
      console.error("Error fetching Firestore document:", error);
    }
  };

  fetchThemeMode();

  console.log("Theme mode:", themeMode);
  console.log("Initial fetch done:", initialFetchDone);

  return themeMode; // Only return the value of themeMode
};

export default ThemeMode;
