import React from "react";
import DonutChart from "react-donut-chart";
import {
  donut_data,
  kpi_data,
} from "../../data/dashboard/order_status_chart_data";

const OrderStatusDonutChart = () => {
  return (
    <div className="bg-white p-5 rounded-lg drop-shadow">
      <div>
        <h1 className="text-[20px] font-bold">Order Status</h1>
        <p className="text-[12px] text-grey font-light">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 my-5">
        {kpi_data.map((x, i) => (
          <div key={i} className="border-2 border-[#eee] rounded-lg p-3">
            <h1 className="text-2xl font-bold">{x.count}</h1>
            <p className="text-medium-grey">{x.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-5 items-center my-5">
        <DonutChart
          height={100}
          width={100}
          legend={false}
          strokeColor="#fff"
          data={donut_data.data}
          colors={donut_data.colors}
          outerRadius={1}
          innerRadius={1 / 2}
        />

        <div className="flex-1">
          {donut_data.data.map((x, i) => (
            <ProgressBar
              key={i}
              data={x}
              index={i}
              colors={donut_data.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderStatusDonutChart;

const ProgressBar = ({ data: { label, value }, index, colors }) => {
  return (
    <div className="flex gap-5 items-center my-2">
      <p className="w-28">{label}</p>
      <div className="flex-1 bg-[#ccc] h-2 rounded-full">
        <div
          style={{
            background: colors[index], // shows the same color as in donut
            width: `${value}%`, //the inner div show the progress by width
          }}
          className={`h-full w-full rounded-full`}
        ></div>
      </div>
      <p className="w-10 text-end">{value}</p>
    </div>
  );
};
