import React, {Component} from 'react';

class Sort extends Component {
  sort(field) {
    this.props.sortBy(field);
  }
  render() {
    return(
      <div class="sort-container">
        <ul>
            <li class="sort-button" onClick={}>Sort by topic</li>
            <li class="sort-button" onClick={}>Sort by price</li>
        </ul>
      </div>
    )
  }
}