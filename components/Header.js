import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';


const Header = () => {

  return (
    <View style={styles.contentBox}>
      <Pressable
        onPress={() => navigation.navigate("Search")}
        style={styles.locationContainer}
      >
        <Ionicons name="location-outline" size={24} color="black" />
        <TextInput
          placeholderTextColor="black"
          placeholder="Enter your location..."

          // {
          //   route?.params ? route.params.input : "Enter your Location"
          // }
        />
      </Pressable>
      <Feather style={styles.filters} name="sliders" size={28} color="white" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  contentBox: {
    width: '100%',
    backgroundColor: "#003580",
    height: 90,
    flexDirection: "row",
    alignItems:'center',
    alignContent:'center',
    paddingHorizontal:20,
    gap: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 0,
    borderRadius: 25,
    padding: 8,
  },
  presslabel: {
    marginLeft: 8,
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 15,
  },
  locationContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems:'center',
    alignContent:'center',
    gap:10,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 15,
  },
  filters: {
    flex:1,
  }
});
