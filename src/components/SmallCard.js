import React, { Component } from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
// import Flippy, { FrontSide, BackSide } from "react-flippy";
class SmallCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      infos: [],
      infoSmall: [this.props.item]
    };
  }

  handleClick = event => {
    event.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
    console.log("click");
  };

  render() {
    const { infos, item, infoSmall } = this.state;
    // const { details } = this.props;
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <div key={index}>
              <ReactCardFlip
                cardZIndex="auto"
                isFlipped={this.state.isFlipped}
                flipSpeedFrontToBack={1.5}
                flipSpeedBackToFront={1.5}
                id={item.id}
                key={index}
              >
                <div
                  key="front"
                  onClick={this.handleClick}
                  style={this.props.styles.card3}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <h2>{item.value}</h2>

                    <button onClick={() => this.props.onDelete(index)}>
                      X
                    </button>
                  </div>
                </div>

                <div
                  key="back"
                  onClick={this.handleClick}
                  style={this.props.styles.card3}
                >
                  <h2>Back</h2>
                </div>
              </ReactCardFlip>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SmallCard;
