import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <nav class="navbar">
        <div class="container">
            <div class="logo"></div>
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
            <span class="icon"><i class="ion-ionic"></i></span>
        </div>
    </nav>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
