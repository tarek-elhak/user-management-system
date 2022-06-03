import "./App.module.css";
import SideBar from "./Components/SideBar/SideBar";
import StatusBar from "./Components/StatusBar/StatusBar";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SideBar />
      <Hero />
    </div>
  );
}

export default App;
