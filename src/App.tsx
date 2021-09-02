import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { Home, About, Service, Study, Contact, SubRnD1, SubRnD2, SubRnD3 } from "pages";

let prePath = "";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (prePath.indexOf("/") !== -1) {
      prePath = "";
      if (location.pathname === "/contact/2") {
        window.location.reload();
      }
    }
    prePath = location.pathname;
  }, [location]);
  return (
    <div className="app">
      <Route exact path="/" component={(props: any) => <Home {...props} />} />
      <Switch>
        <Route
          path="/about/:page"
          component={(props: any) => <About {...props} />}
        />
        <Route path="/about" component={About} />
      </Switch>
      <Switch>
        <Route
          path="/service/:page"
          component={(props: any) => <Service {...props} />}
        />
        <Route path="/service" component={Service} />
      </Switch>
      <Switch>
        <Route
          path="/study/:page"
          component={(props: any) => <Study {...props} />}
        />
        <Route path="/study" component={Study} />
      </Switch>
      <Switch>
        <Route
          path="/contact/:page"
          component={(props: any) => <Contact {...props} />}
        />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Switch>
        <Route
          path="/rnd/1"
          component={(props: any) => <SubRnD1 {...props} />}
        />
        <Route
          path="/rnd/2"
          component={(props: any) => <SubRnD2 {...props} />}
        />
        <Route
          path="/rnd/3"
          component={(props: any) => <SubRnD3 {...props} />}
        />
        <Route exact path="/rnd" component={SubRnD1} />
      </Switch>
    </div>
  );
}

export default App;
