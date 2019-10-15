import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar.js'
import TileContainer from './components/TileContainer.js'
import Footer from './components/Footer.js'

import './index.css';

class App extends Component {
  render() {
    return (
      // Need opening and closing Fragment tags for "sibling" components
      <Fragment>
        <NavBar />
        <TileContainer data={DATA}/>
        <Footer />
      </Fragment>
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
