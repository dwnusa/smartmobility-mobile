import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.scss";
import {
  Mobile,
  Home,
  About,
  Service,
  Study,
  Contact,
  SubRnD1,
  SubRnD2,
  SubRnD3,
} from "pages";

let prePath = "";

function App() {
  const isPc = useMediaQuery({
    query: "(min-width:600px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
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
      {!isPc && <Mobile isPc={isPc} />}
      <Route
        exact
        path="/"
        component={(props: any) => <Home {...props} isPc={isPc} />}
      />
      <Switch>
        <Route
          path="/about/:page"
          component={(props: any) => <About {...props} isPc={isPc} />}
        />
      </Switch>
      <Switch>
        <Route
          path="/service/:page"
          component={(props: any) => <Service {...props} isPc={isPc} />}
        />
      </Switch>
      <Switch>
        <Route
          path="/study/:page"
          component={(props: any) => <Study {...props} isPc={isPc} />}
        />
      </Switch>
      <Switch>
        <Route
          path="/contact/:page"
          component={(props: any) => <Contact {...props} isPc={isPc} />}
        />
      </Switch>
      <Switch>
        <Route
          path="/rnd/1"
          component={(props: any) => <SubRnD1 {...props} isPc={isPc} />}
        />
        <Route
          path="/rnd/2"
          component={(props: any) => <SubRnD2 {...props} isPc={isPc} />}
        />
        <Route
          path="/rnd/3"
          component={(props: any) => <SubRnD3 {...props} isPc={isPc} />}
        />
      </Switch>
    </div>
  );
}

export default App;
