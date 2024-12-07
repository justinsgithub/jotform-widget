import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  console.log("About.tsx inside JFCustomWidget", JFCustomWidget);

  JFCustomWidget.subscribe("ready", function () {
    console.log("/about READY");
    const d = JFCustomWidget.getWidgetSetting("index.html date");
    console.log("/about date", d);
    const settings = JFCustomWidget.getWidgetSettings();
    console.log("/about settings", settings);
    const wd = JFCustomWidget.getWidgetData();
    console.log("/about widgedata", wd);

    // const lt = document.getElementById("labelText") as HTMLElement;
    // lt.innerHTML = label;
    //subscribe to form submit event
    JFCustomWidget.subscribe("submit", function () {
      console.log("SUBMITTING");
      // const ui = document.getElementById("userInput") as HTMLInputElement;
      const msg = {
        //you should valid attribute to data for JotForm
        //to be able to use youw widget as required
        valid: true,
        value: "VALUE",
      };
      // send value to JotForm
      JFCustomWidget.sendSubmit(msg);
    });
  });

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
