import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useSelector } from "react-redux";

const ProfileStack = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <Stack.Screen
          name="LoggedProfile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
