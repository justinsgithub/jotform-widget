import React from "react";
import { Link } from "react-router-dom";

console.log("About outside");
const About: React.FC = () => {
  console.log("About inside");

  const wd = window.JFCustomWidget.getWidgetData();
  console.log("widgedata", wd);
  window.JFid = wd.formID;
  console.log("JFid", window.JFid);
  const d = window.JFCustomWidget.getWidgetSetting("date");
  console.log("date", d);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-xl mb-8">Learn more about our company and mission.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default About;
