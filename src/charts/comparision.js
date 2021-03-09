import React from "react";
import { Line } from "react-chartjs-2";

const comparisionNumbers = {
  wdio: [
    492,
    457,
    325,
    329,
    315,
    309,
    313,
    305,
    329,
    304,
    325,
    316,
    320,
    319,
    328,
  ],
  puppeteer: [
    225,
    221,
    202,
    240,
    216,
    194,
    198,
    210,
    214,
    193,
    232,
    197,
    191,
    192,
    232,
  ],
};

const LineChart = () => (
  <div
    sx={{
      margin: `40px auto`,
    }}
  >
    <Line
      data={{
        labels: comparisionNumbers.wdio.map((item, idx) => idx + 1),
        datasets: [
          {
            data: comparisionNumbers.wdio,
            label: `WebdriverIO`,
            borderColor: `rgb(255, 159, 64)`,
            fill: false,
          },
          {
            data: comparisionNumbers.puppeteer,
            label: `Puppeteer`,
            borderColor: `rgb(153, 102, 255)`,
            fill: false,
          },
        ],
      }}
      options={{
        aspectRatio: 1.5,
        title: {
          display: true,
          text: `Time (in seconds) vs Test # for mediawiki/core`,
        },
        tooltips: {
          mode: `index`,
          intersect: false,
        },
        hover: {
          mode: `nearest`,
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: `Test #`,
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: `Time(in seconds)`,
              },
              ticks: {
                stepSize: 100,
              },
            },
          ],
        },
      }}
    />
  </div>
);

export default LineChart;
