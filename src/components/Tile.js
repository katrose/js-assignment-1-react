import React, {Component} from 'react';
import Button from './Button.js'

class Tile extends Component {
  render() {
    return(
      <div className="card" style={{backgroundColor: this.props.color}}>
        <p className="topic">{this.props.topic}</p>
        <h2 className="title">{this.props.title}</h2>
        <Button price={this.props.price}></Button>
      </div>
    )
  }
}

export default Tile;