import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';


const ColorBoxes = () => {

  const theme = useTheme();
  console.log("theme in colorboxes:", theme)



  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
        {/* You can customize the content of the box */}
      </View>
      <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
        {/* You can customize the content of the box */}
      </View>
      <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
        {/* You can customize the content of the box */}
      </View>
      <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
        {/* You can customize the content of the box */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export default ColorBoxes;
