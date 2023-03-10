import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ Items }) {
  return (
    <div className="container ">
      <div className="p-5">
        <h1>Brunch menu</h1>
        <hr className="hr hr-blurry" />
        <hr className="hr hr-blurry" />
        <hr className="hr hr-blurry" />
      </div>

      <div className="row">
        {Items.map((item) => (
          <MenuItem
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
