import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable style={[styles.pressable, {borderWidth:1}]} >
        <Ionicons name="car-sport-outline" size={26} color="white" />
        <Text style={styles.presslabel}>Cars</Text>
      </Pressable>

      <Pressable style={styles.pressable} >
        <Ionicons name="calendar-outline" size={26} color="white" />
        <Text style={styles.presslabel}>Queue</Text>
      </Pressable>

      <Pressable style={styles.pressable} >
        <MaterialCommunityIcons name="truck-delivery-outline" size={26} color="white" />
        <Text style={styles.presslabel}>Arrivals</Text>
      </Pressable>

      <Pressable style={styles.pressable} >
        <MaterialCommunityIcons name="wrench-outline" size={26} color="white" />
        <Text style={styles.presslabel}>Soon</Text>
      </Pressable>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    pressable:{
        flexDirection: 'row',
        alignItems:'center',
        borderColor: '#fff',
        borderWidth:0,
        borderRadius:25,
        padding:8,
    },
    presslabel:{
        marginLeft:8,
        fontWeight:'bold',
        color:'#FFF',
        fontSize:15,
    }
});
