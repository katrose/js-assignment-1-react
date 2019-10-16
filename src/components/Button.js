import React, {Component} from 'react';

class Button extends Component {
  render() {
    return(
      <div className="buy-button">Read for {this.props.price}</div>
    )
  }
}

export default Button;