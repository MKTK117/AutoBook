import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/AuthReducer";

const ProfileScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Exit", "Leave so soon ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => dispatch(logout()) },
    ]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useDispatch();

  return (
    <View>
      <SafeAreaView style={styles.profileHeader}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 300,
          }}
        >
          <Pressable onPress={createTwoButtonAlert}>
            <Ionicons name="md-exit-outline" size={30} color="#003580" />
          </Pressable>
          <Switch
            trackColor={{ false: "#767577", true: "#f4f3f4" }}
            thumbColor={isEnabled ? "#003580" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Image
          style={styles.profileImg}
          source={{
            uri: "https://forums.pixeltailgames.com/uploads/default/original/3X/6/4/64863ed28ce1cf94323dd3fe37b86117ffc0b58a.png",
          }}
        />
        <Text style={styles.nameTitle}>Mark Tkachov</Text>
      </SafeAreaView>
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
      <SafeAreaView style={styles.bottomBlock}>
        <Text>Here will be your last ride and history</Text>
        <Text>Here will be recomendations</Text>
        <Text>Here will be your balance</Text>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileHeader: {
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: "#bbb",
  },
  profileImg: {
    bottom: 15,
    borderWidth: 0.5,
    borderColor: "#bbb",
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  nameTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  bottomBlock: {
    marginTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 0.5,
    borderColor: "#bbb",
  },
});
