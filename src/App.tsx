import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
// import About from "About";
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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/study" component={Study} />
      <Route path="/contact" component={Contact} />
      {/* <React.Fragment>
        <Greetings name="Hello" onClick={onClick} />
        <Counter />
        <TestComponent />
      </React.Fragment> */}
    </div>
  );
}

export default App;
