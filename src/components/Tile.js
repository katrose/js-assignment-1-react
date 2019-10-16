import React, {Component} from 'react';
import Button from './Button.js'

class Tile extends Component {
  render() {

    let topic = this.props.topic;
    let title = this.props.title;
    let price = this.props.price;
    let color = this.props.color;

    return(
      <div className="card" style={{backgroundColor: color}}>
        <p className="topic">{topic}</p>
        <h2 className="title">{title}</h2>
        <Button price={price}
                class="buy-button" />
      </div>
    )
  }
}

export default Tile;