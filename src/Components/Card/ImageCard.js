import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import { useContextAPI } from "../../App";

const ImageCard = (props) => {
  const [value, setValue] = useContext(useContextAPI);

  console.log(value);

  const [isClearable, setIsClearable] = useState({
    clicked: false,
  });

  //  const [count, setCount] = useState(0);

  const handleCheckboxClick = () => {
    setIsClearable((state) => ({
      ...state,
      clicked: true,
    }));
    setValue((cnt) => console.log(cnt));
  };

  console.log(isClearable.count);

  return (
    <div className={`card ${isClearable.clicked ? "show-checkbox" : ""}`}>
      <input
        type="checkbox"
        checked={isClearable.clicked}
        onClick={handleCheckboxClick}
        className="checkbox"
      />
      <img className="image" src={props.image} alt="" />
    </div>
  );
};

export default ImageCard;
