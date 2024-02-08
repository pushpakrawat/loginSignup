import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FIREBASE_DB } from "../../firebase/firebaseconfig";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { Switch } from "react-native-paper";

const ThemeSwitch = () => {
  const [themeMode, setThemeMode] = useState(null);
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const userId = "VtxzLHQ2jc3aro8Dg2Fy"; // Replace with your specific user ID

  useEffect(() => {
    // Fetch theme value from Firestore for a specific user when the component mounts
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
  }, [userId]); // Include userId as a dependency to refetch when it changes

  const updateFirestore = async (newThemeMode) => {
    try {
      const userDocRef = doc(FIREBASE_DB, "users", userId);

      // Update the existing document
      await updateDoc(userDocRef, { themeMode: newThemeMode });
      console.log("Updated Firestore with theme:", newThemeMode);
    } catch (error) {
      console.error("Error updating/fetching Firestore document:", error);
    }
  };

  const toggleSwitch = () => {
    // Use the callback version of setThemeMode to ensure up-to-date state
    setThemeMode((prevThemeMode) => {
      const newThemeMode = prevThemeMode === "light" ? "dark" : "light";
      console.log("Toggled switch. New theme mode:", newThemeMode);

      // Only update Firestore if initial fetch is complete
      if (initialFetchDone) {
        updateFirestore(newThemeMode);
      }

      return newThemeMode;
    });
  };

  if (themeMode === null) {
    // Loading state or default value until the initial fetch is complete
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Text style={styles.themeText}>Current Theme: {themeMode}</Text>
      <Switch
        value={themeMode === "dark"}
        onValueChange={toggleSwitch}
        color="blue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  themeText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ThemeSwitch;
