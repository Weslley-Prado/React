import React from "react";
import ReactDOM from "react-dom";

//To render in the page, you need to write the function below

ReactDOM.render(<h1>React is JavaScript Library </h1>, document.getElementById('root'))

//Or you could write 

const element = <h1>I like React </h1>
ReactDOM.render(element, document.getElementById('root'))
