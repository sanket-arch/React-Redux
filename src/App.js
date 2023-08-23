import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Cakecontainer from "./components/Cakecontainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import Icecreamcontainer from "./components/Icecreamcontainer";
// import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />
        <Cakecontainer />
        <Icecreamcontainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
