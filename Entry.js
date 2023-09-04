import React from "react";
import StackNavigator from "./StackNavigator";
import { ModalPortal } from "react-native-modals";

const Entry = () => {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
};

export default Entry;
