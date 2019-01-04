import React, { Component } from 'react';
import Stickybar from './Stickybar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  componentDidMount () {
    document.getElementById("root").setAttribute("theme", "light");
  }

  handleLightbulb = (isLightMode) => {
    let theme = isLightMode ? "light" : "dark";
    document.getElementById("root").setAttribute("theme", theme);
  }

  render () {
    return (
      <div className="App">
        <Stickybar onToggleLightbulb={this.handleLightbulb}/>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
