import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      // Need opening and closing Fragment tags for "sibling" components
      <Fragment>
        <NavBar />
        <TileContainer data={DATA}/>
      </Fragment>
    )
  }
}

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

class TileContainer extends Component {
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

    return (
      <section className="section">
        <div className="container">
          <div>
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

class Tile extends Component {
  render() {

    let topic = this.props.topic;
    let title = this.props.title;
    let price = "Read for " + this.props.price;

    return(
      <div className="card">
        <p className="topic">{topic}</p>
        <h2 className="title">{title}</h2>
        <div className="buy-button">{price}</div>
      </div>
    )
  }
}

const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const DATA = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

ReactDOM.render(<App />, document.getElementById('root'));
