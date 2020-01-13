import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import Projects from "./components/Projects"
import BrandStatement from "./components/BrandStatement"
import ContactForm from "./components/ContactForm"

class App extends React.Component {
  state = {
   
  };

  
    
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" render={() => <BrandStatement />} />
        <div className="parallax"></div>
        <Route  render={() => <Projects />} />
        <div className="parallax"></div>
        <Route render={() => <ContactForm/>}/>
        <Footer  />
      </div>
    );
  }
}

export default App;
