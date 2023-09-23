// HomeScreenAuto.js
import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import CarCard from "../components/CarCard";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const carData = [
  {
    id: "1",
    title: "BMW 125",
    shortDescription: "Description for Car 4",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, vel deleniti. Doloremque veniam, odio accusantium quisquam minima nihil suscipit minus dolor odit, itaque mollitia commodi error nesciunt, maiores hic alias?",
    price: "$50/day",
    image: "https://pics.clipartpng.com/Black_BMW_Car_PNG_Clipart-692.png",
    owner: "Jakob",
    address: "Berlin, Helmholtzstr. 17",
    rating: 3.5,
  },
  {
    id: "2",
    title: "BMW 730d",
    shortDescription: "Description for Car 4",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, vel deleniti. Doloremque veniam, odio accusantium quisquam minima nihil suscipit minus dolor odit, itaque mollitia commodi error nesciunt, maiores hic alias?",

    price: "$60/day",
    image:
      "https://pics.clipartpng.com/midle/Black_Sapphire_Metallic_BMW_7_Sedan_2013_Car_PNG_Clipart-108.png",
    owner: "Max",
    rating: 5,
  },
  {
    id: "3",
    title: "Audi TT",
    shortDescription: "Description for Car 4",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, vel deleniti. Doloremque veniam, odio accusantium quisquam minima nihil suscipit minus dolor odit, itaque mollitia commodi error nesciunt, maiores hic alias?",

    price: "$30/day",
    image:
      "https://www.freeiconspng.com/thumbs/car-png/red-sports-car-png-1.png",
    owner: "Lisa",
    rating: 5,
  },
  {
    id: "4",
    title: "Honda CR-V",
    shortDescription: "Description for Car 4",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, vel deleniti. Doloremque veniam, odio accusantium quisquam minima nihil suscipit minus dolor odit, itaque mollitia commodi error nesciunt, maiores hic alias?",

    price: "$55/day",
    image:
      "https://purepng.com/public/uploads/large/purepng.com-honda-carshondacarshonda-manufacturingvehicle-honda-1701527486092fnkn1.png",
    owner: "Bob",
    rating: 4.5,
  },
  {
    id: "5",
    title: "Honda Accord",
    shortDescription: "Description for Car 4",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, vel deleniti. Doloremque veniam, odio accusantium quisquam minima nihil suscipit minus dolor odit, itaque mollitia commodi error nesciunt, maiores hic alias?",

    price: "$35/day",
    image:
      "https://www.freepnglogos.com/uploads/honda-car-png/honda-car-honda-accord-incentives-specials-offers-moon-25.png",
    owner: "Norman",
    rating: 3.5,
  },
  {
    id: "6",
    title: "Chevy Captiva",
    shortDescription: "Description for Car 4",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, vel deleniti. Doloremque veniam, odio accusantium quisquam minima nihil suscipit minus dolor odit, itaque mollitia commodi error nesciunt, maiores hic alias?",

    price: "$43/day",
    image: "https://assets.fastly.carvana.io/home-assets/nba/equinox.png",
    owner: "Stephan",
    rating: 4,
  },
];

const HomeScreenAuto = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Choose a car",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#FFF",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 15 }}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Header />
      <View style= {{height: 60, justifyContent:'center', paddingHorizontal: 10,}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{carData.length} Results</Text>
      </View>
      <FlatList
        style={{ height: "92%" }}
        data={carData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable>
            <CarCard car={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomeScreenAuto;
