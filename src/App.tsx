import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
// import About from "About";
import { Header } from "components";
import { Home, About, Service, Study, Contact } from "pages";
// import Greetings from "components/Greetings";
// import Counter from "components/Counter";
// import TestComponent from "components/TestComponent";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  // return <Greetings name="Hello" onClick={onClick} />;
  return (
    <div>
      <Header />
      {/* <Menu /> */}
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/service" component={Service} />
        <Route path="/study" component={Study} />
        <Route path="/contact" component={Contact} />
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
