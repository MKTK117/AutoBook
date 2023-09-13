import React from "react";
import { useAuth } from "../hooks/useAuth";
import AuthStack from "./authStack";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";

const RootNavigation = () => {
  const { user } = useAuth();

  return user ? (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  ) : (
    <AuthStack />
  );
};

export default RootNavigation;
