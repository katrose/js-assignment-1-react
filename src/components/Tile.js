import React, {Component} from 'react';

class Tile extends Component {
  render() {

    let topic = this.props.topic;
    let title = this.props.title;
    let price = "Read for " + this.props.price;
    let color = this.props.color;

    return(
      <div className="card" style={{backgroundColor: color}}>
        <p className="topic">{topic}</p>
        <h2 className="title">{title}</h2>
        <div className="buy-button">{price}</div>
      </div>
    )
  }
}

export default Tile;