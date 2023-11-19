import { useState } from "react";

const Item = ({ item, number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <span className="number">{number < 10 ? `0${number}` : number}</span>
      <span className="title">{item.title}</span>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <div className="content-box">{item.text}</div>}
    </div>
  );
};

export default Item;
