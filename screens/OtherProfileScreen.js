import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth } from 'firebase/auth';

const OtherProfileScreen = () => {
    
    const auth = getAuth();
    const user = auth.currentUser;

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
            </View>
    
            <Image
              style={styles.profileImg}
              source={{
                uri: "https://forums.pixeltailgames.com/uploads/default/original/3X/6/4/64863ed28ce1cf94323dd3fe37b86117ffc0b58a.png",
              }}
            />
            <Text style={styles.nameTitle}>{user.displayName}</Text>
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
}

export default OtherProfileScreen

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
})