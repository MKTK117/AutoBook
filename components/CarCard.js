// CarCard.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BtnMask from "./BtnMask";


const CarCard = ({ car }) => {
  const navigation = useNavigation();

  const handleCarPress = () => {
    // Navigate to the CarScreen and pass the car data as a parameter
    navigation.navigate("CarScreen", { car });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRatingBox}>
        <MaterialCommunityIcons name="star-circle" size={24} color="green" />
        <Text>{car.rating}</Text>
      </View>
      <Image source={{ uri: car.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{car.title}</Text>
      <Text style={styles.cardDescription}>{car.shortDescription}</Text>
      <Text style={styles.cardPrice}>Price: {car.price}</Text>
      <BtnMask handleCarPress={handleCarPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 15,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    padding: 16,
    margin: 8,
    alignItems: "center",
    backgroundColor: "white",
  },
  cardImage: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 8,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardRatingBox: {
    padding: 5,
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    right: 170,
  },
  
});

export default CarCard;
