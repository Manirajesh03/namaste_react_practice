/*
 * <div>
 *    <div>
 * <h1>I am from nested react</h1>
 * </div>
 *</div>
 * ReactElement(Object) => HTML(Browser Understandable)
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am from nested react"),
    React.createElement("h2", { id: "heading2" }, "I am from nested react"),
  ])
);
console.log("🚀 ~ parent:", parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);
console.log("🚀 ~ heading:", heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
