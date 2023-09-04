import { Provider } from "react-redux";
import store from "./store";
import Entry from "./Entry";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Entry/>
      </Provider>
    </>
  );
}

