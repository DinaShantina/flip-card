import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import axios from "axios";

const styles = {
  card3: {
    border: "2px solid #d18689",
    borderRadius: "3px",
    height: "22rem"

    // paddingBottom: "15rem"
  }
};
const AllCards = () => {
  const [infos, setInfos] = useState([]);

  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setInfos(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  }, [infos]);

  const deleteCard = id => {
    const newInfos = infos.filter(info => info.id !== id);
    setInfos(newInfos);
  };

  return (
    <div className="container">
      {infos.map((info, index) => (
        <div className="col-md-6" key={index}>
          <SmallCard
            infos={info.name}
            proffesion={info.company.catchPhrase}
            id={info.id}
            styles={styles}
            onDelete={deleteCard}
          />
        </div>
      ))}
    </div>
  );
};

export default AllCards;
