import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";
import axios from "axios";

const styles = {
  card3: {
    border: "3px solid #BF1D23",
    borderRadius: "3px",
    paddingBottom: "15rem"
  }
};
const AllCards = () => {
  const [items, setItems] = useState([
    { id: 1, value: "hello" },
    { id: 2, value: "bye" },
    { id: 3, value: "kidding" }
  ]);
  const [infos, setInfos] = useState([]);

  const [hasError, setErrors] = useState(false);
  //   useEffect(() => {
  //     getInfos();
  //   }, []);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setInfos(res))
        .catch(err => setErrors(err));
    }
    fetchData();
  });
  //   const getInfos = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await response.json();
  //     setInfos(data.name);
  //     console.log("hello", setInfos);
  //   };
  const deleteCard = key => {
    infos.splice(key, 1);
    console.log(infos);
  };

  return (
    <div className="container">
      <div className="col-md-6">
        {/* <span>{JSON.stringify(infos)}</span> */}
        {infos.map((info, index) => (
          <SmallCard
            infos={info.name}
            proffesion={info.company.catchPhrase}
            key={index.toString()}
            id={info.id}
            styles={styles}
            onDelete={deleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCards;
