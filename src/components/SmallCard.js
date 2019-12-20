import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [newName, setNewName] = useState([]);
  const [hasError, setErrors] = useState(true);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setDetails(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  }, []);

  useEffect(() => {}, []);

  const handleClick = event => {
    event.preventDefault();

    setIsFlipped(!isFlipped);
    console.log("Click");
  };

  const randomName = () => {
    let newArrayName = [];
    console.log(details);
    let user = details.map(item => item.name.split(" "));
    newArrayName = [...user];

    const users = newArrayName[Math.floor(Math.random() * newArrayName.length)];
    for (var i = 1; i <= newArrayName.length; i++) {
      users.push(newArrayName[i]);
    }
    // console.log(newArrayName[3]);
    console.log("AAA", newArrayName);
    console.log("NEW", users);
  };

  return (
    <div style={{ marginBottom: "5rem" }}>
      <ReactCardFlip
        cardZIndex="auto"
        isFlipped={isFlipped}
        flipSpeedFrontToBack={1.5}
        flipSpeedBackToFront={1.5}
        id={id}
        key={index}
      >
        <div onClick={handleClick} style={styles.card3}>
          <button
            type="button"
            onClick={() => {
              onDelete(id);
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
