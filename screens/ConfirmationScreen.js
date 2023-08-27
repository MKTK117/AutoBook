import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { savedPlaces } from "../SavedReducer";

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
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
  const dispatch = useDispatch();
  const confirmBooking = async () => {
    dispatch(savedPlaces(route.params));

    navigation.navigate("Main");
  };
  return (
    <View>
      <Pressable style={{ backgroundColor: "white", margin: 10 }}>
        <View style={styles.headerBox}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View style={styles.subheaderBox}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View style={styles.geniusLevelBox}>
                <Text style={styles.geniusLevelText}>Genius Level</Text>
              </View>
            </View>
          </View>

          <View style={styles.travelSustainableBox}>
            <Text style={styles.travelSustainableText}>Travel sustainable</Text>
          </View>
        </View>

        <View style={styles.datesBox}>
          <View>
            <Text style={styles.checkInOut}>Check In</Text>
            <Text style={styles.checkInOutDates}>{route.params.startDate}</Text>
          </View>

          <View>
            <Text style={styles.checkInOut}>Check Out</Text>
            <Text style={styles.checkInOutDates}>{route.params.endDate}</Text>
          </View>
        </View>
        <View style={{ margin: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Pressable onPress={confirmBooking} style={styles.btnConfirmBook}>
          <Text style={styles.btnConfirmBookLabel}>Book Now</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  headerBox: {
    marginHorizontal: 12,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subheaderBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 7,
  },
  geniusLevelBox: {
    backgroundColor: "#003580",
    paddingVertical: 3,
    borderRadius: 5,
    width: 100,
  },
  geniusLevelText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
  travelSustainableBox: {
    backgroundColor: "#17B169",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
  },
  travelSustainableText: {
    color: "white",
    fontSize: 13,
  },
  datesBox: {
    margin: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
  },
  checkInOut: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },
  checkInOutDates: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007FFF",
  },
  btnConfirmBook: {
    backgroundColor: "#003580",
    width: 120,
    padding: 5,
    marginHorizontal: 12,
    marginBottom: 20,
    borderRadius: 4,
  },
  btnConfirmBookLabel: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
