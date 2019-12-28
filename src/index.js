import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

const clickMe = () => {
  console.log("hi");
  return <h1>Hello There</h1>;
};

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clickMe} />
  </div>,
  document.getElementById("root")
);
