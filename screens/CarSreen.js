// CarScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { Ionicons } from "@expo/vector-icons";

const CarScreen = ({ route }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [tripDays, setTripDays] = useState();

	console.log('state is ' + selectedDates.startDate);

  const calculateTripPrice = (startDateStr, endDateStr) => {
    const startDate = startDateStr;
    const endDate = endDateStr;
		console.log(startDateStr)
    

    const timeDifference = endDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };
	

  const { car } = route.params;
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ratingBox}>
        <MaterialCommunityIcons name="star-circle" size={24} color="green" />
        <Text>{car.rating}</Text>
      </View>
      <Image style={styles.carImage} source={{ uri: car.image }} />
      <Text style={styles.title}>{car.title}</Text>
      <Text style={styles.description}>{car.fullDescription}</Text>
      <Text style={styles.price}>Price: {car.price}</Text>
      <View style={styles.addInfoBox}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Trip Dates</Text>
        <View style={styles.fieldBox}>
          <DatePicker
            style={{ width: 350, height: 30, borderWidth: 0 }}
            customStyles={{
              placeholderText: {
                fontSize: 15,
                flexDirection: "row",
                alignItems: "center",
                marginRight: "auto",
              },
              headerStyle: {
                backgroundColor: "#003580",
              },
              contentText: {
                fontSize: 15,
                flexDirection: "row",
                alignItems: "center",
                marginRight: "auto",
              },
            }} // optional
            selectedBgColor="#0047AB"
            customButton={(onConfirm) => customButton(onConfirm)}
            onConfirm={(startDate, endDate) => {
              setSelectedDates(startDate, endDate);
              setTripDays(
                calculateTripPrice(
                  selectedDates.startDate,
                  selectedDates.endDate
                )
              );
              console.log(tripDays);
            }}
            allowFontScaling={false} // optional
            placeholder={"Select your Dates"}
            mode={"range"}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pickup & Return</Text>
        <Pressable style={styles.fieldBox}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text>{car.address}</Text>
        </Pressable>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.rentBtn,
          { backgroundColor: pressed ? "#5AC8FA" : "#007AFF" },
        ]}
      >
        <Text style={styles.btnText}>Proceed to Check-out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  carImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
    marginTop: 8,
  },
  description: {
    padding: 10,
    fontSize: 17,
    fontWeight: "500",
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: "#bbb",
    borderRadius: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratingBox: {
    width: 70,
    height: 45,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    borderWidth: 0.5,
    borderColor: "#bbb",
    padding: 10,
    borderRadius: 20,
  },
  rentBtn: {
    alignItems: "center",
    justifyContent: "center",
		marginTop:40,
    height: 40,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
	addInfoBox: {
		marginTop: 40,
		flexDirection:'column',
		gap: 10,
	},
  fieldBox: {
    flexDirection: "row",
    width: 350,
    height: 50,
    backgroundColor: "#fff",
    paddingLeft: 20,
    borderRadius: 10,
    justifyContent: "start",
    alignItems: "center",
    gap: 10,
  },
});

export default CarScreen;
