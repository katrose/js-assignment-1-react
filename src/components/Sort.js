import React, {Component} from 'react';

class Sort extends Component {
  sort(field) {
    this.props.sortBy(field);
  }
  render() {
    return(
      <div className="sort-container">
        <ul>
            <li className="sort-button" onClick={this.sort.bind(this, 'topic')}>Sort by topic</li>
            <li className="sort-button" onClick={this.sort.bind(this, 'price')}>Sort by price</li>
        </ul>
      </div>
    )
  }
}

export default Sort;