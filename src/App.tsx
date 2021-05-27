import React from "react";
import "./App.css";
import Greetings from "./Greetings";
import Counter from "./Counter";
import TestComponent from "./TestComponent";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  // return <Greetings name="Hello" onClick={onClick} />;
  return (
    <React.Fragment>
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
      <TestComponent />
    </React.Fragment>
  );
}

export default App;
