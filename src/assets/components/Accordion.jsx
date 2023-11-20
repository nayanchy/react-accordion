import { useState } from "react";
import Item from "./Item";

const Accordion = ({ faqs }) => {
  const [isClickedId, setIsClickedId] = useState(null);
  const handleClick = (id) => {
    setIsClickedId(id);
  };
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item
          key={item.id}
          number={i + 1}
          item={item}
          getClickedID={handleClick}
          isOpen={isClickedId === item.id}
        />
      ))}
    </div>
  );
};

export default Accordion;
