import React from "react";
import { Text, View, StyleSheet, StatusBar, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "Eggs",
  },
  {
    title: "Bacon",
  },
];

function GroceriesListPage() {
    return (
      <View style={{ height: 200, width: Dimensions.get("screen").width }}>
        <FlashList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={200}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 12,
    },
  });

  export default GroceriesListPage;