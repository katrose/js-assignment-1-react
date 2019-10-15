import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/NavBar.js'
import TileContainer from './components/TileContainer.js'
import Footer from './components/Footer.js'

import DATA from './components/data.js'

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

ReactDOM.render(<App />, document.getElementById('root'));
