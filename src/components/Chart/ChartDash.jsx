import { colors } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1430, 540, 850],
  ["2019", 2030, 240, 150],
  ["2020", 1430, 1140, 1650],
  ["2021", 930, 1140, 650],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors:['rgb(102,102,255)','rgb(102,178,255)','rgb(102,255,178)']
};

const ChartDash = () => {
  return (
    <>
       <Chart
      chartType="Bar"
      width="100%"
      height="320px"
      data={data}
      options={options}
    />
    </>
  )
}

export default ChartDash ;




