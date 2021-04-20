import React from "react";
//import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home';
import "./App.css";
import Reviews from "./components/Reviews";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div>
      {/* <Particles 
                canvasClassName="example"
                height="120px"
                width="300px"
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }} /> */}
        <Navbar />
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/feature" component={Feature} />
        <Route exact path="/account" component={Account} />
        <Route path="/about" component={About} /> */}
        {/* <Header/> */}
        <div className="bodyContainer">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/reviews" component={Reviews}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
