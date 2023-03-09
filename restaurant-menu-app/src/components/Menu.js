import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ Items }) {
  return (
    <>
      {Items.map((items) => (
        <MenuItem
          title={items.title}
          description={items.description}
          price={items.price}
        />
      ))}
    </>
  );
}
