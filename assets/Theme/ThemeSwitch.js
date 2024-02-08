import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import ThemeMode from "./ThemeMode";
import { updateDoc, doc } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebase/firebaseconfig";

const ThemeSwitch = () => {
  console.log("ThemeSwitch component rendering...");
  
  const themeMode = ThemeMode(); // Remove object destructuring

  const userId = "VtxzLHQ2jc3aro8Dg2Fy"; 

  const updateFirestore = async (newThemeMode) => {
    try {
      const userDocRef = doc(FIREBASE_DB, "users", userId);
      console.log("Updating Firestore with theme mode:", newThemeMode);
      
      // Update the existing document
      await updateDoc(userDocRef, { themeMode: newThemeMode });
      console.log("Firestore updated successfully.");
    } catch (error) {
      console.error("Error updating/fetching Firestore document:", error);
    }
  };

  const toggleSwitch = () => {
    console.log("Toggle switch function called...");
    
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    console.log("Toggled switch. New theme mode:", newThemeMode);

    // Update Firestore with the new theme mode
    updateFirestore(newThemeMode);
  };

  if (themeMode === null) {
    // Loading state or default value until the initial fetch is complete
    console.log("Theme mode is null. Displaying loading state...");
    
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log("Rendering UI with theme mode:", themeMode);
  
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
