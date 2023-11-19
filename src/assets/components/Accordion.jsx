import Item from "./Item";

const Accordion = ({ faqs }) => {
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Item key={item.id} number={i + 1} item={item} />
      ))}
    </div>
  );
};

export default Accordion;
