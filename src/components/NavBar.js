import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo"></div>
            <ul>
              <li>World</li>
              <li>Sports</li>
              <li>Opinion</li>
              <li><strong>Lifestyle</strong></li>
              <li>Business</li>
              <li>Culture</li>
              <li>Fashion</li>
              <li>Tech</li>
            </ul>
            <span className="icon">
              <i className="ion-ionic"></i>
            </span>
        </div>
      </nav>
    )
  }
}

export default NavBar;