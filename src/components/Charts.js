import React from "react";
import "../Charts.css";
import { Pie } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(84,28,203,0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgb(255,251,252)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  maintainAspectRatio: false,

  legend: {
    display: true,
    position: "right",
    align: "start",
  },
};
// Later On To Be Modified As Component For Simplification
const Charts = () => {
  return (
    <div className="charts">
      <div className="cards">
        <div className="cardItem">
          <h3>Top Language</h3>
          <Pie
            display={"block"}
            data={data}
            padding={"12px"}
            options={options}
          />
        </div>
        <div className="cardItem">
          <h3>Most Starred</h3>
        </div>
        <div className="cardItem">
          <h3>Stars per Language</h3>
        </div>
      </div>
    </div>
  );
};

export default Charts;
