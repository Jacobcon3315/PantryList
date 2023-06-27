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
      <View style={{ height: 200, width: Dimensions.get("screen").width, flex: 1, justifyContent: "center", alignItems: "center"}}>
        <FlashList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        estimatedItemSize={50}
        />
      </View>
    );
  }

  export default GroceriesListPage;