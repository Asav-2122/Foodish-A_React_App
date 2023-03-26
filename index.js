import React from "react";
import  ReactDOM  from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React."
);

// now create Functonal create

const Heading =()=>{
  return (
    <div>
      <h1 id="heading">Hello world From Functional Component.</h1>
      {heading1}
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);

/* how things works in javascript for that :

const heading = document.createElement("h1");
heading.innerHTML = "Namste React From JavaScript";

const root = document.getElemntById("root");
root.appendChild(heading);

*/
