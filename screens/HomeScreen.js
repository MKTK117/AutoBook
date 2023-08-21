import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View style={styles.filterBox}>
            {/* Location */}
            <Pressable style={styles.pressableBox}>
              <Ionicons name="search" size={24} color="black" />
              <TextInput
                placeholderTextColor="black"
                placeholder="Enter your Location"
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
                placeholder={"Apr 27, 2018 → Jul 10, 2018"}
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
                placeholder="4 seats • 2 adults • 0 children"
              />
            </Pressable>

            {/* Search Button */}
            <Pressable
              style={[
                styles.pressableBox,
                { backgroundColor: "#2a52be", justifyContent: "center" },
              ]}
            >
              <Text style={styles.searchBtn}>Search</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

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
          <View
            style={styles.modalView}
          >
            <Text
            style={styles.modalControlsText}
            >Seats</Text>
            <Pressable
              style={styles.modalPressable}
            >
              <Pressable 
              style={styles.modalControlsPressables}
              onPress={() => setSeats(seats - 1)}>
                <Text
                style={styles.modalControlsIncDec}
                >-</Text>
              </Pressable>

              <Pressable>
                <Text>{seats}</Text>
              </Pressable>

              <Pressable 
              style={styles.modalControlsPressables}
              onPress={() => setSeats(seats + 1)}>
                <Text
                style={styles.modalControlsIncDec}
                >+</Text>
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
    gap: 10 
  },
  modalControlsPressables: {
    width:26,
    height:26,
    borderRadius:13,
    borderColor:'#BEBEBE',
    backgroundColor:'#E0E0E0'
  },
  modalControlsIncDec: {
    textAlign:"center",
    fontSize:20,
    fontWeight:"600",
    paddingHorizontal:6,
  },
  modalControlsText: {
    textAlign:"center",
    fontSize:20,
    fontWeight:"500",
    paddingHorizontal:6,
  }
});
