import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

const styles = {
  card3: {
    border: "2px solid #d18689",
    borderRadius: "3px",
    height: "22rem"
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

  const getFullNames = arr => arr.map(x => x.name);
  const getNames = arr => arr.map(x => x.split(" ")[0]);
  const getSurnames = arr => arr.map(x => x.split(" ")[1]);

  const getProffesion = arr => arr.map(x => x.company.catchPhrase);

  const getSingleProffesion = arr => arr.map(x => x.split(" ")[0]);
  const getSingleProffesion2 = arr => arr.map(x => x.split(" ")[1]);

  const proffesion1 = getSingleProffesion(getProffesion(infos));
  const proffesion2 = getSingleProffesion2(getProffesion(infos));

  const twoArrayPermutator = (arr1, arr2) => {
    return arr1.reduce((accumulator, value) => {
      return [...accumulator, ...arr2.map(x => value + " " + x)];
    }, []);
  };

  const names = getNames(getFullNames(infos));
  const surnames = getSurnames(getFullNames(infos));
  const allNames = twoArrayPermutator(names, surnames);

  const professionTwo = twoArrayPermutator(proffesion1, proffesion2);

  return (
    <div className="container">
      {allNames.map((name, index) => (
        <div className="col-md-6" key={index}>
          <SmallCard
            proffesion={professionTwo[index]}
            id={index}
            name={name}
            styles={styles}
          />
        </div>
      ))}
    </div>
  );
};

export default AllCards;
