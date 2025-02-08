import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const NAVBAR_ITEMS = [
    { icon: "🏠", text: "home", component: <HomePage update={update} /> },
    { icon: "🖼️", text: "About", component: <AboutPage update={update} /> },
    { icon: "🔍", text: "search", component: <SearchPage update={update} /> },
    { icon: "🤦", text: "Profile", component: <ProfilePage update={update} /> },
  ];

  const activePage = NAVBAR_ITEMS[activePageIndex].component;

  return (
    <div className="app">
      <NavBar ITEMS={NAVBAR_ITEMS} setActivePageIndex={setActivePageIndex} />
      <div className="main-container">
        {activePage}
      </div>
    </div>
  );
}

export default App;