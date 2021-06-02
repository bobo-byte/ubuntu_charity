import React from "react";
import CustomNavigationBar from "./components/CustomNavigationBar";
import ImageContainer from "./PresentationContainer";
import Strategy from "./components/Strategy";
import ScrollTopButton from "./components/ScrollTop";
import Gallery from "./components/Gallery";
import Values from "./components/Values";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUS from "./components/AboutUS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <CustomNavigationBar />
            <ImageContainer />
            <Strategy />
            <Values />
            <Gallery />
            <Projects />
            <Team />
            <Contact />
            <ScrollTopButton />
            <Footer />
          </div>
        </Route>
        <Route path="/about">
          <AboutUS />
        </Route>
      </Switch>
    </Router>
  );
}
