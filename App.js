import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import { ModalPortal } from "react-native-modals";
import store from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}

