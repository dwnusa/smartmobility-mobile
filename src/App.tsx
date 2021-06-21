import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
// import About from "About";
import { NavLink, useLocation } from "react-router-dom";
import { Home, About, Service, Study, Contact } from "pages";
// import Greetings from "components/Greetings";
// import Counter from "components/Counter";
// import TestComponent from "components/TestComponent";

let prePath = ""; // 컴포넌트 함수 외부에 위치
function App() {
  const location = useLocation();
  // console.log(location.pathname);
  useEffect(() => {
    // console.log("새로고침", prePath);
    if (prePath.indexOf("/") !== -1) {
      prePath = "";
      if (location.pathname === "/contact/2") {
        window.location.reload(); // 새로고침
      }
    }
    prePath = location.pathname; // 지금의 주소를 저장한다.
  }, [location]);
  return (
    <div className="app">
      <Route exact path="/" component={(props: any) => <Home {...props} />} />
      <Switch>
        {/* (props) => <Details required="some string" {...props} /> */}
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
      {/* <React.Fragment>
        <Greetings name="Hello" onClick={onClick} />
        <Counter />
        <TestComponent />
      </React.Fragment> */}
    </div>
  );
}

export default App;
