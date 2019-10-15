import React, {Component} from 'react';

import {Tile} from './Tile.js'

export class TileContainer extends Component {
  render() {

    let tiles = [];

    this.props.data.forEach((article) => {
      tiles.push(
        <Tile 
          topic = {article.topic}
          title = {article.title}
          price = {article.price}
          color = {article.color} />
      )
    });

    // From original HTML (inline styles)
    let styles = {
      marginTop: '40px',
      marginLeft: '10px',
      marginBottom: '40px'
    }

    return (
      <section className="section">
        <div className="container">
          <div style={styles}>
            <h1>Lifestyle.</h1>
            <p>The latest and best lifestyle articles selected<br/>
                by our editorial office.
            </p>
          </div>
        </div>
        <div className="container">
            <div className='card-row' id='content'>{tiles}</div>
        </div>
      </section>
    )
  }
}