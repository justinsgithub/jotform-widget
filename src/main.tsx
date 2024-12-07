import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

console.log("main.tsx before createRoot");

const rd = document.getElementById("root")!;

const root = (function () {
  const cr = ReactDOM.createRoot(rd);
  console.log("main.tsx after createRoot(");
  return cr;
})();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
