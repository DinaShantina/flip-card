import React, { Component } from "react";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import "./card.style.css";
import { Spinner } from "react-bootstrap";

class BigCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      infos: [],
      loading: false
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.setState({
          infos: response.data,
          loading: false
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick = event => {
    event.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped,
      loading: false
    }));
  };

  render() {
    const { infos, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <ReactCardFlip
            isFlipped={this.state.isFlipped}
            flipSpeedFrontToBack={1.5}
            flipSpeedBackToFront={1.5}
          >
            <div onClick={this.handleClick} style={this.props.styles.card}>
              <h3 className="alert alert-success">Guest attending</h3>
              <ol style={{ padding: "30px" }}>
                {infos.map(name => (
                  <li key={name.id} style={this.props.styles.text}>
                    {name.name}
                  </li>
                ))}
              </ol>
            </div>

            <div onClick={this.handleClick} style={this.props.styles.card}>
              <h3 className="alert alert-warning">Guest proffesion</h3>
              <ol style={{ padding: "35px" }}>
                {infos.map(proffesion => (
                  <li key={proffesion.id} style={this.props.styles.text}>
                    {proffesion.company.catchPhrase}
                  </li>
                ))}
              </ol>
            </div>
          </ReactCardFlip>
        )}
      </div>
    );
  }
}

export default BigCard;
