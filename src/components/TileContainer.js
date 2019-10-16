import React, {Component} from 'react';
import Tile from './Tile.js'
import Sort from './Sort.js'

class TileContainer extends Component {

  state = {
    // How to initialize this to default data array?
    tiles: []
  }
  
  sortBy = (field) => {

    let dataArray = this.props.data;
    let sortedTiles = [];

    if (field === 'topic') {

      dataArray.sort(function(a, b) {
        if (a.topic < b.topic) {
            return -1;
        }
        else {
            return 1;
        }
      })

      dataArray.forEach((article) => {
        sortedTiles.push(
          <Tile 
            topic = {article.topic}
            title = {article.title}
            price = {article.price}
            color = {article.color} />
        )
      });
    }

    if (field === 'price') {
      dataArray.sort(function(a, b) {

        // Convert price strings to integers
        let numA = Number(a.price.substr(1));
        let numB = Number(b.price.substr(1));

        if (numA < numB) {
            return -1;
        }
        else {
            return 1;
        }
      });

      dataArray.forEach((article) => {
        sortedTiles.push(
          <Tile 
            topic = {article.topic}
            title = {article.title}
            price = {article.price}
            color = {article.color} />
        )
      });
    }

    this.setState({
      tiles: sortedTiles
    })
  }

  render() {

    // let tilesInitial = [];

    // this.props.data.forEach((article) => {
    //   tilesInitial.push(
    //     <Tile 
    //       topic = {article.topic}
    //       title = {article.title}
    //       price = {article.price}
    //       color = {article.color} />
    //   )
    // });

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
          <Sort sortBy={this.sortBy} />
          <div className='card-row' id='content'>{this.state.tiles}</div>
        </div>
      </section>
    )
  }
}

export default TileContainer;