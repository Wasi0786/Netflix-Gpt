import "./index.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  

  return (
    <Provider store={appStore}>
      <div className="overflow-x-hidden">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
