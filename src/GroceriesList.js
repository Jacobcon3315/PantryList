import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";

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
  },
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

export default GroceriesListPage;