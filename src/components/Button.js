import React, {Component} from 'react';

class Button extends Component {

  render() {

    let buttonType = this.props.class;
    let price = this.props.price;

    // Set button text
    let buttonText = typeof(price) != "undefined" ? "Read for " + price : this.props.text;

    return(
      <div className={buttonType}>{buttonText}</div>
    )
  }
}

export default Button;