const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React."
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

/* how things works in javascript for that :

const heading = document.createElement("h1");
heading.innerHTML = "Namste React From JavaScript";

const root = document.getElemntById("root");
root.appendChild(heading);

*/
