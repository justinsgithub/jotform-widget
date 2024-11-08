import { formatDistance, subDays } from "date-fns";

const datetest = formatDistance(subDays(new Date(), 3), new Date(), {
  addSuffix: true,
}); //=> "3 days ago"
console.log(datetest);

const h3 = document.getElementById("h3") as HTMLElement;
h3.innerHTML = datetest;

//always subscribe to ready event and implement widget related code
//inside callback function , it is the best practice while developing widgets
JFCustomWidget.subscribe("ready", function () {
  const label = JFCustomWidget.getWidgetSetting("DateString");
  const lt = document.getElementById("labelText") as HTMLElement;
  lt.innerHTML = label;
  //subscribe to form submit event
  JFCustomWidget.subscribe("submit", function () {
    const ui = document.getElementById("userInput") as HTMLInputElement;
    const msg = {
      //you should valid attribute to data for JotForm
      //to be able to use youw widget as required
      valid: true,
      value: ui.value,
    };
    // send value to JotForm
    JFCustomWidget.sendSubmit(msg);
  });
});
