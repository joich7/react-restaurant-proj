import React from "react";
import "./menu.css";
import EggsBenedict from "../images/EggsBenedict.jpeg";
import ShrimpandGrits from "../images/shrimpgrits.jpeg";
import AvocadoToast from "../images/avocadoToast.jpeg";
import FrenchToast from "../images/frenchToast.jpeg";
import BagelandLox from "../images/frenchToast.jpeg";
import BreakfastBurrito from "../images/burrito.jpeg";
import FruitSalad from "../images/fruit.jpeg";

export default function MenuItem({ title, description, price }) {
  function removeSpaces(word) {
    let newStr = "{" + word?.split(" ").join("") + "}";
    console.log(newStr);
    return newStr;
  }
  return (
    <div className="col-12 col-md-6 h-100 mt-2">
      <div className="card h-100 bg-secondary">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">{description}</div>
          <div className="card-text">${`${price}`}</div>
        </div>
      </div>
    </div>
  );
}
