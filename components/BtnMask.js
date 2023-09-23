import {
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const BtnMask = ({handleCarPress}) => {
  return (
    <View style={{ alignSelf: "flex-end", backgroundColor: "#F2F2F2", right:-17, bottom: -17 }}>
      <View
        style={{
          backgroundColor: "#fff",
          height: 30,
          borderBottomRightRadius: 50,
        }}
      />
      <View style={{ flexDirection: "row", backgroundColor: "#F2F2F2" }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: 30,
            borderBottomRightRadius: 50,
          }}
        />
        <View style={{ backgroundColor: "#F2F2F2", borderRadius: 15 }}>
          <View
            style={{
              position: "absolute",
              backgroundColor: "#F2F2F2",
              width: 120,
              height: 120,
              borderTopLeftRadius: 15,
              top: -4,
              left: -4
            }}
          />
          <View>
            <TouchableOpacity style={styles.btn} onPress={handleCarPress}>
              <FontAwesome5 name="car-side" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BtnMask;

const styles = StyleSheet.create({
  btn: {
    height: 70,
    width: 70,
    backgroundColor: "#003838",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderBottomRightRadius: 40,
    marginTop: 10,
    marginLeft: 10,
    zIndex: 2,
  },
});
