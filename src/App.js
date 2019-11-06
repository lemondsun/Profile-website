import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import Body from "./components/Body";
import Events from "./components/Events"
class App extends React.Component {
  state = {
   
  };

  
    
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" render={() => <Body />} />
        <Route path="/events" render={() => <Events />}/>
        <Footer />
      </div>
    );
  }
}

export default App;
