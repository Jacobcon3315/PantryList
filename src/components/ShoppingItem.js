import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DATA = [
	{
		title: "Eggs",
	},
	{
		title: "Bacon",
	}
];
	
const Item = ({title}) => (
<View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
</View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f6b26b",
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export {Item};
export {DATA};