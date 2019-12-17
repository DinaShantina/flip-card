import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";

const SmallCard = ({ key, id, styles, onDelete, index, infos, proffesion }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [newName, setNewName] = useState([]);
  const [hasError, setErrors] = useState(false);
  useEffect(() => {
    randomName();
  }, [1]);
  const handleClick = (event, index) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
    console.log("click");
  };

  const randomName = () => {
    const newArrayName = [];
    // for (let v of infos) {
    //   newArrayName.push(...v);
    // }
    // console.log(newArrayName);
    // newName.map(names => console.log(names.name));
    // const separate = name.split(" ");
    // console.log(name);
    // newArrayName.push(separate);
    const users = infos
      .split(" ")
      .map(item => item)
      .flat();
    // users.map(item => newArrayName.push(item));
    console.log("AAA", users);
    // newArrayName.forEach(item => {
    //   console.log(item);
    // });
    // setNewName(hello);
    console.log("NEW", newArrayName);

    // const newRes = newName.concat(res);
    // console.log("NAMES", res);
    // setNewName([newRes]);
    // console.log(newName);
    // res.forEach(item => {
    //   //   newArrayName.push(item);
    //   setNewName([item]);
    //   console.log("HI", newArrayName);
    // });

    // console.log("new", newName.concat(res));

    // setNewName(res.push(newName));
    // const random = Math.floor(Math.random() * res.length);
    // console.log("hello", res);

    // console.log("hello", setNewName);
  };
  return (
    <div>
      <div>
        <ReactCardFlip
          cardZIndex="auto"
          isFlipped={isFlipped}
          flipSpeedFrontToBack={1.5}
          flipSpeedBackToFront={1.5}
          id={id}
          key={key}
        >
          <div key="front" onClick={handleClick} style={styles.card3}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <h2>{infos.toString()}</h2>
              <button onClick={onDelete}>X</button>
            </div>
          </div>

          <div key="back" onClick={handleClick} style={styles.card3}>
            <h2>{proffesion.toString()}</h2>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default SmallCard;
