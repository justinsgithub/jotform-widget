import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

console.log("App.tsx outside");
const App: React.FC = () => {
  console.log("App.tsx inside");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/form" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
