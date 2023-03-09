import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu";
function App() {
  const [items] = useState([
    { title: "Split Pea Soup", price: 20, description: "two peas and a pod" },
    { title: "Orange Creamsicle", price: 90, description: "orange peely" },
  ]);

  return (
    <div className="App container">
      <Navbar />
      <Menu Items={items} />
    </div>
  );
}

export default App;
