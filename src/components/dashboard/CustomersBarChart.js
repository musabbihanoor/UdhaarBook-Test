import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  barChartConfig,
  bar_chart_data,
} from "../../data/dashboard/customer_chart_data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CustomersBarChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow">
      <div className="mb-5">
        <h1 className="text-[20px] font-bold">Customers</h1>
        <p className="text-[12px] text-grey font-light">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      <Bar options={barChartConfig} data={bar_chart_data} height={100} />
    </div>
  );
};

export default CustomersBarChart;
