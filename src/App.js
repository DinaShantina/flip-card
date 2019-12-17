import React from "react";
import BigCard from "./components/BigCard";
import AllCards from "./components/AllCards";

import "./App.css";

const App = () => {
  const images = "../logo.png";
  const styles = {
    card: {
      border: "3px solid #eeeeee",
      borderRadius: "3px",
      padding: "35px"
      // width: "550px",
      // backgroundColor: "#D3D3D3"
    },
    card2: {
      border: "3px solid #eeeeee",
      borderRadius: "3px",
      padding: "35px"
      // width: "550px"
    },
    text: {
      fontSize: "2rem"
    },
    image: {
      height: "200px",
      width: "250px"
    },
    card3: {
      // width: "250px",
      borderRadius: "3px",
      padding: "35px",
      // width: "550px",
      backgroundColor: "#D3D3D3"
    }
  };
  return (
    <div className="container">
      <div className="flex">
        <img className="App-logo" src={images} alt="logo" />
        <h1>Event</h1>
      </div>

      <div className="row">
        <div className="col-md-6">
          <BigCard styles={styles} />
        </div>
        <div className="col-md-6">
          <AllCards />
        </div>
      </div>
    </div>
  );
};

export default App;
