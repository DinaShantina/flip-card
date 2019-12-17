import React, { Component } from "react";
import SmallCard from "./SmallCard";

const styles = {
  card3: {
    border: "3px solid #BF1D23",
    borderRadius: "3px",
    paddingBottom: "15rem"
  }
};
class AllCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [],
      items: [
        { id: 1, value: "hello" },
        { id: 2, value: "bye" },
        { id: 3, value: "kidding" }
      ]
    };
  }
  deleteCard = index => {
    // const items = this.state.items.filter(item => item.id !== index);
    let { items } = this.state;
    items.splice(index, 1);

    this.setState({ items: items });
    console.log(items);
  };
  render() {
    return (
      <div className="container">
        <div className="col-md-6">
          {/* {this.state.items.map(item => (
            <SmallCard
              key={item.id}
              id={item.id}
              styles={styles}
              onDelete={this.deleteCard}
              value={item.value}
            />
          ))} */}
          <SmallCard
            items={this.state.items}
            styles={styles}
            onDelete={this.deleteCard}
          />
        </div>
      </div>
    );
  }
}

export default AllCards;
