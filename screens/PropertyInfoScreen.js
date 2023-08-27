import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Pressable,
    Image,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { pixelNormalize } from "../components/Normalise";
  import { MaterialIcons } from "@expo/vector-icons";
  import Amenities from "../components/Amenities";
  
  const PropertyInfoScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        title: `${route.params.name}`,
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
    const difference = route.params.oldPrice - route.params.newPrice;
    const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <Pressable
              style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
            >
              {route.params.photos.slice(0, 5).map((photo) => (
                <View style={{ margin: 6 }}>
                  <Image
                    style={{
                      width: 120,
                      height: pixelNormalize(80),
                      borderRadius: pixelNormalize(4),
                    }}
                    source={{ uri: photo.image }}
                  />
                </View>
              ))}
              <Pressable
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Text style={{ textAlign: "center", marginLeft: 20 }}>
                  Show More
                </Text>
              </Pressable>
            </Pressable>
  
            <View
              style={styles.titleBox}
            >
              <View>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                  {route.params.name}
                </Text>
                <View
                  style={styles.subtitleBox}
                >
                  <MaterialIcons name="stars" size={24} color="green" />
                  <Text>{route.params.rating}</Text>
                  <View
                    style={styles.geniusBox}
                  >
                    <Text
                      style={styles.geniusText}
                    >
                      Genius Level
                    </Text>
                  </View>
                </View>
              </View>
  
              <View
                style={styles.travelSustainableBox}
              >
                <Text style={styles.travelSustainableText}>
                  Travel sustainable
                </Text>
              </View>
            </View>
  
            <Text
              style={styles.hrLine}
            />
            <Text
              style={{
                marginTop: 10,
                fontSize: 17,
                fontWeight: "500",
                marginHorizontal: 12,
              }}
            >
              Price for 1 Night and {route.params.adults} adults
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 12,
                marginTop: 4,
                gap: 8,
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice * route.params.adults}
              </Text>
              <Text style={{ fontSize: 20 }}>
                Rs {route.params.newPrice * route.params.adults}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: 12,
                marginTop: 7,
                backgroundColor: "green",
                paddingHorizontal: 4,
                paddingVertical: 5,
                width: 78,
                borderRadius: 4,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                {offerPrice.toFixed(0)} % OFF
              </Text>
            </View>
  
            <Text
              style={styles.hrLine}
            />
            <View
              style={styles.datesBox}
            >
              <View>
                <Text
                  style={styles.checkInOut}
                >
                  Check In
                </Text>
                <Text
                  style={styles.checkInOutDates}
                >
                  {route.params.selectedDates.startDate}
                </Text>
              </View>
  
              <View>
                <Text
                  style={styles.checkInOut}
                >
                  Check Out
                </Text>
                <Text
                  style={styles.checkInOutDates}
                >
                  {route.params.selectedDates.endDate}
                </Text>
              </View>
            </View>
            <View style={{ margin: 12 }}>
              <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
                Rooms and Guests
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.rooms} rooms {route.params.adults} adults{" "}
                {route.params.childrens} children
              </Text>
            </View>
  
            <Text
              style={styles.hrLine}
            />
            <Amenities />
  
            <Text
              style={styles.hrLine}
            />
          </ScrollView>
        </SafeAreaView>
  
        <Pressable
        onPress={() => navigation.navigate("Rooms",{
          rooms:route.params.availableRooms,
          oldPrice:route.params.oldPrice,
          newPrice:route.params.newPrice,
          name:route.params.name,
          children:route.params.children,
          adults:route.params.adults,
          rating:route.params.rating,
          startDate:route.params.selectedDates.startDate,
          endDate:route.params.selectedDates.endDate
        })}
          style={styles.selectBtn}
        >
          <Text style={styles.selectBtnLabel}>
            Select Availabilty
          </Text>
        </Pressable>
      </>
    );
  };
  
  export default PropertyInfoScreen;
  
  const styles = StyleSheet.create({
    titleBox: {
        marginHorizontal: 12,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    subtitleBox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 7,
    },
    geniusBox: {
        backgroundColor: "#003580",
        paddingVertical: 3,
        borderRadius: 5,
        width: 100,
    },
    geniusText: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
    },
    travelSustainableBox: {
        backgroundColor: "#17B169",
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 6,
        position:'absolute',
        top: 37,
        left: 280,
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
        marginBottom: 3
    },
    checkInOutDates: {
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#007FFF" 
    },
    hrLine: {
        borderColor: "#E0E0E0",
        borderWidth: 3,
        height: 1,
        marginTop: 15,
    },
    selectBtn: {
        backgroundColor: "#6CB4EE",
        position: "absolute",
        bottom: 20,
        padding: 15,
        width:"95%",
        marginHorizontal:10,
    },
    selectBtnLabel: {
        textAlign: "center", 
        color: "white",
        fontWeight:"bold",
        fontSize:17 
    }

  });