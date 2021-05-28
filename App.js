import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = useState("This is not really a bird nest.");

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View style={styles.viewBox}>
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  viewBox: {
    marginTop: 50,
    height:500,
    width:500,
    backgroundColor: 'red'
  }
});

export default TextInANest;