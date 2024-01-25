export const chartConfig = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Hide verticle grid lines
      },
    },
    y: {
      min: 0,
      max: 1000000,
      ticks: {
        stepSize: 200000, // set the interval between points on the y-axis
      },
    },
  },
};

const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const line_chart_data = {
  labels,
  datasets: [
    {
      label: "Expense",
      data: Array.from(
        { length: 12 },
        () => Math.random() * (1000000 - 200000) + 200000
      ),
      borderColor: "#F18680",
      backgroundColor: "#F18680",
    },
    {
      label: "Income",
      data: Array.from(
        { length: 12 },
        () => Math.random() * (1000000 - 200000) + 200000
      ),
      borderColor: "#00C34E",
      backgroundColor: "#00C34E",
    },
  ],
};
