import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Day",
    "Guardians of the Galaxy",
    "The Avengers",
    "Transformers: Age of Extinction",
  ],
  [1, 37.8, 8.8, 41.8],
  [2, 108.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 35.6, 7.7],
  [7, 7.6, 12.3, 98.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 40.7],
  [12, 60.6, 8.4, 5.2],
  [13, 24.8, 6.3, 37.6],
  [14, 0.2, 76.2, 3.4],
];

export const options = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
  },
};

const LineChart = () => {
  return (
    <>
      <Chart className="w-full"
      chartType="Line"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
    </>
  )
}

export default LineChart

