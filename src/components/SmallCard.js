import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";

const SmallCard = ({ key, id, styles, onDelete, index, infos, proffesion }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  //   const [infos, setInfos] = useState([]);
  //   useEffect(() => {
  //     randomName();
  //   }, []);
  const handleClick = (event, index) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
    console.log("click");
  };

  //   const randomName = () => {
  //     const res = infos.split("");
  //     console.log(res);
  //   };
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
              <button onClick={() => onDelete(key)}>X</button>
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
