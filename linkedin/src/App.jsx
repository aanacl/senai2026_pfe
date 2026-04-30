import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Sidebar from "./components/Sidebar";
import Highlights from "./components/Highlights";

function App() {
  return (
    <div className="container">
      <div className="left">
        <ProfileCard />
        <Highlights />
      </div>

      <div className="right">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;