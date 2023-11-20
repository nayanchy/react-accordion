import { useState } from "react";

const Item = ({ item, number, getClickedID, isOpen }) => {
  const handleClick = (id) => {
    getClickedID(id);
  };
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleClick(item.id)}
    >
      <span className="number">{number < 10 ? `0${number}` : number}</span>
      <span className="title">{item.title}</span>
      <span className="icon"></span>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
};

export default Item;
