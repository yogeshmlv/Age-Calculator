import "./App.css";

import moment from "moment";
import React, { useState } from "react";

function App() {
  const [birth, setBirth] = useState("");
  const [today, setToday] = useState(moment().format("YYYY-MM-DD"));

  const changeBirthHandler = (e) => {
    setBirth(e.target.value);
  };

  const changeTodayHandler = (e) => {
    setToday(e.target.value);
  };

  function getYearsMonthsDays(date1, date2) {
    const a = moment(date1);
    const b = moment(date2);
    var years = a.diff(b, "year");
    b.add(years, "years");

    const noOfDaysInb = b.daysInMonth();
    const noOfDaysIna = a.daysInMonth();
    let months = 0;
    if (noOfDaysInb > noOfDaysIna) {
      months = b.diff(a, "months");
      a.add(months, "months");
    } else {
      months = a.diff(b, "months");
      b.add(months, "months");
    }
    var days = a.diff(b, "days");
    const c = moment();
    const d = moment();
    const hours = c.diff(a, "hours");
    const seconds = d.diff(a, "seconds");

    var totalYears = Math.abs(years);
    var totalMonths = Math.abs(months);
    var totalDays = Math.abs(days);
    var totalhours = Math.abs(hours);
    var totalSeconds = Math.abs(seconds);

    

    return `${totalYears} Years ${totalMonths} Months ${totalDays} Days ${totalhours} Hours ${totalSeconds} Seconds`;
  }

  return (
    <div className="App">
      <div className="App-header ">
        <h1 className="header">Age Calculator</h1>
        <div className="content">
         
          <label>Enter Your Dob</label>

          <input
            onChange={changeBirthHandler}
            type="date"
            name="birth"
            id="birth"
          />
          <br />
          <label className="date">Today Date</label>
          <input
            onChange={changeTodayHandler}
            value={today}
            type="date"
            name="today"
            id="today"
            placeholder="Today"
          />

          <h3>
            {birth.length > 0 && today.length > 0
              ? getYearsMonthsDays(birth, today)
              : ""}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
