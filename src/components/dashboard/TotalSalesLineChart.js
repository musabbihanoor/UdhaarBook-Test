import React, { Fragment } from "react";
import { GoDotFill } from "react-icons/go";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  chartConfig,
  line_chart_data,
} from "../../data/dashboard/total_sales_chart_data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalSalesLineChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow">
      <div className="flex justify-between mb-5">
        <div>
          <h1 className="text-[20px] font-bold">Total Sales</h1>
          <p className="text-[12px] text-grey font-light">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <div className="flex gap-5">
          <div className="flex flex-col items-end">
            <p className="text-xs text-grey flex items-center">
              <GoDotFill className="text-lg text-green" />
              Income
            </p>
            <p className="font-bold">$100.421</p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-xs text-grey flex items-center">
              <GoDotFill className="text-lg text-peach" />
              Expense
            </p>
            <p className="font-bold">$93.21</p>
          </div>
        </div>
      </div>
      <Fragment>
        <Line options={chartConfig} data={line_chart_data} />
      </Fragment>
    </div>
  );
};

export default TotalSalesLineChart;
