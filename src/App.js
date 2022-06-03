import "./App.module.css";
import SideBar from "./Components/SideBar/SideBar";
import StatusBar from "./Components/StatusBar/StatusBar";

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SideBar />
    </div>
  );
}

export default App;
