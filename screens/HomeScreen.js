import {
  Image,
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";

const HomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const [seats, setSeats] = useState(4);
  const [adults, setAdults] = useState(2);
  const [childrens, setChildrens] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "AutoBook.com",
      headerTitleStyle: {
        fontSize: 20,
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

  const searchPlaces = (place) => {
    if (!route.params || !selectedDates) {
      Alert.alert("Error", "Fill all fields", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (route.params && selectedDates) {
      navigation.navigate("Places", {
        rooms: seats,
        adults: adults,
        childrens: childrens,
        selectedDates: selectedDates,
        place: place,
      });
    }
  };

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View style={styles.filterBox}>
            {/* Location */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
              style={styles.pressableBox}
            >
              <Ionicons name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder={
                  route?.params ? route.params.input : "Enter your Location"
                }
              />
            </Pressable>

            {/* Dates */}
            <Pressable style={styles.pressableBox}>
              <Ionicons name="ios-calendar" size={24} color="black" />
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
                onConfirm={(startDate, endDate) =>
                  setSelectedDates(startDate, endDate)
                }
                allowFontScaling={false} // optional
                placeholder={"Select your Dates"}
                mode={"range"}
              />
            </Pressable>

            {/* Number of Passangers */}

            <Pressable
              style={styles.pressableBox}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="person-add-sharp" size={24} color="black" />
              <TextInput
                placeholderTextColor="red"
                placeholder={`${seats} seats • ${adults} adults • ${childrens} children`}
              />
            </Pressable>

            {/* Search Button */}

            <Pressable
              onPress={() => searchPlaces(route?.params.input)}
              style={[
                styles.pressableBox,
                { backgroundColor: "#2a52be", justifyContent: "center" },
              ]}
            >
              <Text style={styles.searchBtn}>Search</Text>
            </Pressable>
          </View>

          {/* Promo Block */}

          <Text
            style={{ marginHorizontal: 25, fontSize: 17, fontWeight: "500" }}
          >
            Ride more, spend less.
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: "#003580",
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#fff",
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                You are ate Genious level one in our loyalty program.
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#003580",
                  marginVertical: 7,
                }}
              >
                10% Discounts
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Enjoy Discounts at participating at properties worldwide.
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: "#E0E0E0",
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#003580",
                  marginVertical: 7,
                }}
              >
                New rides every month!
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Feel free to choose whatever auto you want.
              </Text>
            </Pressable>
          </ScrollView>

          {/* Image Link */}

          <Pressable style={styles.imageLinkPressable}>
            <Image
              style={styles.imageLinkImg}
              source={{
                uri: "https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png",
              }}
            />
          </Pressable>
        </ScrollView>
      </View>

      {/* Modal for amount of People */}

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "#fff",
                backgroundColor: "#003580",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle title="Select number of seats and passangers" />
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View style={styles.modalView}>
            <Text style={styles.modalControlsText}>Seats</Text>
            <Pressable style={styles.modalPressable}>
              <Pressable
                style={styles.modalControlsPressables}
                onPress={() => setSeats(Math.max(2, seats - 2))}
              >
                <Text style={styles.modalControlsIncDec}>-</Text>
              </Pressable>

              <Pressable>
                <Text>{seats}</Text>
              </Pressable>

              <Pressable
                style={styles.modalControlsPressables}
                onPress={() => setSeats(Math.min(6, seats + 2))}
              >
                <Text style={styles.modalControlsIncDec}>+</Text>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.modalView}>
            <Text style={styles.modalControlsText}>Adults</Text>
            <Pressable style={styles.modalPressable}>
              <Pressable
                style={styles.modalControlsPressables}
                onPress={() => setAdults(Math.max(1, adults - 1))}
              >
                <Text style={styles.modalControlsIncDec}>-</Text>
              </Pressable>

              <Pressable>
                <Text>{adults}</Text>
              </Pressable>

              <Pressable
                style={styles.modalControlsPressables}
                onPress={() => setAdults(Math.min(seats, adults + 1))}
              >
                <Text style={styles.modalControlsIncDec}>+</Text>
              </Pressable>
            </Pressable>
          </View>

          <View style={styles.modalView}>
            <Text style={styles.modalControlsText}>Childrens</Text>
            <Pressable style={styles.modalPressable}>
              <Pressable
                style={styles.modalControlsPressables}
                onPress={() => setChildrens(Math.max(0, childrens - 1))}
              >
                <Text style={styles.modalControlsIncDec}>-</Text>
              </Pressable>

              <Pressable>
                <Text>{childrens}</Text>
              </Pressable>

              <Pressable
                style={styles.modalControlsPressables}
                onPress={() => setChildrens(childrens + 1)}
              >
                <Text style={styles.modalControlsIncDec}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  filterBox: {
    margin: 20,
    borderWidth: 2,
    borderColor: "#FFC72C",
    borderRadius: 6,
  },
  pressableBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#FFC72C",
  },
  searchBtn: {
    fontSize: 15,
    fontWeight: "500",
    color: "#FFF",
  },
  imageLinkPressable: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  imageLinkImg: {
    width: 200,
    height: 50,
    resizeMode: "cover",
  },

  // Modal for number of passengers
  modalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  modalPressable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  modalControlsPressables: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: "#BEBEBE",
    backgroundColor: "#E0E0E0",
  },
  modalControlsIncDec: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 6,
  },
  modalControlsText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    paddingHorizontal: 6,
  },
});
