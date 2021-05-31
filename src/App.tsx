import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
// import About from "About";
import { Header } from "components";
import { NavLink, useLocation } from "react-router-dom";
import { Home, About, Service, Study, Contact } from "pages";
// import Greetings from "components/Greetings";
// import Counter from "components/Counter";
// import TestComponent from "components/TestComponent";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Menu /> */}
      <div>
        <Route exact path="/" component={Home} />
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
      </div>
      {/* <React.Fragment>
        <Greetings name="Hello" onClick={onClick} />
        <Counter />
        <TestComponent />
      </React.Fragment> */}
    </div>
  );
}

export default App;
