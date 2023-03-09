import React from "react";

export default function MenuItem({ title, description, price }) {
  return (
    <div className="col-6">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
}
