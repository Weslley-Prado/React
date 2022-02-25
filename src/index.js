import React from "react";
import ReactDOM from "react-dom";
import FirstComponent from './componentes/component'

/*
 To render in the page, you need to write the function below
*/
ReactDOM.render(<h1>React is JavaScript Library </h1>, document.getElementById('root'))

/*
 Or you could write 
*/
const element = <h1>I like React </h1>
ReactDOM.render(element, document.getElementById('root'))

/*
 A important principle is to use component for our application.
 For example:
*/
ReactDOM.render(<FirstComponent/>, document.getElementById('root'))
/*
 In this example, we must to notice that it was acessed the folders:
 -componentes
     - component.jsx
 How? In this index.js, we import FirstComponent from this folder and 
 we render with tag <FirstComponent/>
*/


