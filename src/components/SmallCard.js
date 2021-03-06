import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const SmallCard = ({
  key,
  id,
  styles,
  onDelete,
  index,
  infos,
  info,
  proffesion,
  name
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const deleteCard = name => {
    var arrTexts = [name];
    const itemIndex = arrTexts.findIndex(item => item === name);
    if (itemIndex > -1) {
      arrTexts.splice(itemIndex, 1);
    } else {
      arrTexts.push(name);
    }
    console.log(name);
  };
  return (
    <div style={{ marginBottom: "5rem" }}>
      <ReactCardFlip
        cardZIndex="auto"
        isFlipped={isFlipped}
        flipSpeedFrontToBack={1.5}
        flipSpeedBackToFront={1.5}
        id={id}
        index={id}
        key={index}
      >
        <div onClick={handleClick} style={styles.card3}>
          <button
            type="button"
            onClick={() => {
              deleteCard(name);
            }}
            className="close"
            style={{ padding: "1rem" }}
            aria-label="Close"
          >
            <span aria-hidden="true">X</span>
          </button>
          <h2 style={{ margin: "40% auto", textAlign: "center" }}>{name}</h2>
        </div>

        <div onClick={handleClick} style={styles.card3}>
          <h2 style={{ margin: "40% auto", textAlign: "center" }}>
            {proffesion}
          </h2>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default SmallCard;
