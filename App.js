import { Provider } from "react-redux";
import store from "./store";
import Entry from "./Entry";
import { firebaseConfig } from "./config/firebase";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);
export default function App() {
  return (
    <>
      <Provider store={store}>
        <Entry/>
      </Provider>
    </>
  );
}

