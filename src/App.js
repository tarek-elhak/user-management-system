import "./App.module.css";
import SideBar from "./Components/SideBar/SideBar";
import StatusBar from "./Components/StatusBar/StatusBar";
import Hero from "./Components/Hero/Hero";
import UsersManagement from "./Containers/UsersManagement/UsersManagement";

function App() {
  return (
    <div className="App">
      <StatusBar />
      <SideBar />
      <Hero />
      <UsersManagement />
    </div>
  );
}

export default App;
