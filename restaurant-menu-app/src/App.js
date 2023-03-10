import "./App.css";
import Navbar from "./components/Navbar";
//import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  // Store the items in a state variable.
  // We are passing an empty array as the default value.
  let [items, setItems] = useState([""]);
  const BASE_URL = "https://www.jsonkeeper.com";
  //const API_KEY = "";

  useEffect(() => {
    //let zip = selector("zipBox").value;
    //let zipcode = zip +",us";
    let options = {
      baseURL: BASE_URL,
      params: {
        //zip: zipcode,
        //appid: API_KEY,
      },
    };

    axios
      .get("/b/MDXW", options)
      .then(function (response) {
        console.log(response);
        setItems(response.data.filter((food) => food.category === "Breakfast"));
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
        console.log("it failed");
        alert("area code invalid");
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Menu className="bg-primary" Items={items} />
      <Footer />
    </div>
  );
}

export default App;

//title.replaceAll(" ", "")
