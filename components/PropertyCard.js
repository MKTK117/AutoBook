import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PropertyCard = ({
  rooms,
  childrens,
  property,
  adults,
  selectedDates,
  availableRooms,
}) => {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <Pressable style={styles.cardPressableBox}>
        <View>
          <Image
            style={{ height: height / 4, width: width - 280 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.cardViewTitleBox}>
            <Text style={{ width: 200 }}>{property.name}</Text>
            <AntDesign name="hearto" size={24} color="red" />
          </View>
          <View style={styles.cardViewSubtitleBox}>
            <MaterialCommunityIcons
              name="star-circle"
              size={24}
              color="green"
            />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: "#6CB4EE",
                paddingVertical: 3,
                borderRadius: 5,
                width: 100,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 15,
                }}
              >
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: 200,
              marginTop: 6,
              color: "gray",
              fontWeight: "bold",
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
          </Text>

          <Text style={{ marginTop: 4, fontSize: 15, fontWeight: "500" }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textDecorationLine: "line-through",
              }}
            >
              {property.oldPrice * adults}
            </Text>
            <Text style={{ fontSize: 18 }}>{property.newPrice * adults}</Text>
          </View>
          <View
          style={{marginTop:6}}
          >
            <Text style={{fontSize:16, color:'gray'}}>
                Deluxe Room
            </Text>
            <Text style={{fontSize:16, color:'gray'}}>
                Hotel Room : 1 bed
            </Text>
          </View>

          <View 
          style={{
            backgroundColor: "#6082B6",
            paddingVertical: 2,
            borderRadius: 5,
            marginTop:2,
            width: 150,
            paddingHorizontal: 3
          }}
          >
            <Text
            style={{
                color: "#fff",
                textAlign: "center",
              }}
            >Limited Time Deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  cardPressableBox: {
    margin: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  cardViewTitleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardViewSubtitleBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 7,
  },
});
