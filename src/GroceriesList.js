import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";
import { Item, DATA } from "./components/ShoppingItem";

function GroceriesListPage() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});

export default GroceriesListPage;