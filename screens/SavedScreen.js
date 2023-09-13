import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons"; 
import { useNavigation } from "@react-navigation/native";

const SavedScreen = () => {

  const navigation = useNavigation();
  const favorites = useSelector((state) => state.favorites.favorites);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Saved",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {favorites.length > 0 &&
        favorites.map((item, index) => (
          <Pressable
            key={index} 
            style={styles.cardPressable}
          >
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.itemHeader}>
                <MaterialIcons name="star" size={24} color="green" />
                <Text style={styles.itemRating}>{item.rating}</Text>
                <Text style={styles.itemSeparator}>•</Text>
                <View style={styles.itemContent}>
                  <Text style={styles.itemText}>Genius Level</Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
  },
  cardPressable: {
    margin: 15,
    padding: 15,
    backgroundColor: "#f0f0f0", 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  itemRating: {
    marginLeft: 5,
  },
  itemSeparator: {
    marginLeft: 5,
  },
  itemContent: {
    backgroundColor: "#6CB4EE",
    borderRadius: 5,
    marginLeft: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  itemText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default SavedScreen;
