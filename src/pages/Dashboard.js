import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

import KPIsList from "../components/dashboard/KPIsList";
import OrderStatusDonutChart from "../components/dashboard/OrderStatusDonutChart";
import TotalSalesLineChart from "../components/dashboard/TotalSalesLineChart";
import CustomersBarChart from "../components/dashboard/CustomersBarChart";
import CartPerformance from "../components/dashboard/CartPerformance";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl">Hi, Samuel</h1>
            <p className="text-sm text-grey mt-3 font-normal">
              Take a look to your monthly overview
            </p>
          </div>

          <div>
            <DateRangePicker
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
          </div>
        </div>

        <KPIsList />

        <div className="grid grid-cols-2 gap-5">
          <OrderStatusDonutChart />
          <TotalSalesLineChart />
        </div>

        <div className="grid grid-cols-2 gap-5 my-5">
          <CustomersBarChart />
          <CartPerformance />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Dashboard;
