import { useState } from "react";
import Item from "./Item";

const Accordion = ({ faqs }) => {
  const [isClickedId, setIsClickedId] = useState(null);
  const handleClick = (id) => {
    setIsClickedId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="accordion">
      {faqs.map((item, i) => {
        const isOpened = isClickedId === item.id;
        return (
          <Item
            key={item.id}
            number={i + 1}
            item={item}
            getClickedID={handleClick}
            isOpen={isOpened}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
