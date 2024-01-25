import React from "react";

import { BsGraphDown } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";

import { data } from "../../data/dashboard/kpi_data";

const KPIsList = () => {
  return (
    <div className="grid grid-cols-4 gap-5 my-5">
      {data.map((x, i) => (
        <div key={i} className="bg-white p-5 rounded-lg drop-shadow">
          <div className={`bg-${x.color} text-white p-2 w-fit rounded-full`}>
            {x.icon}
          </div>

          <p className="my-3 text-grey text-sm">{x.title}</p>
          <div className="flex gap-3 items-center my-3">
            <p className="text-3xl">{x.value}</p>
            {x.status === "up" && (
              <>
                <span className="text-green text-xl">
                  <BsGraphUp />
                </span>
                <p className="text-green">{x.rate}</p>
              </>
            )}
            {x.status === "down" && (
              <>
                <span className="text-red text-xl">
                  <BsGraphDown />
                </span>
                <p className="text-red">{x.rate}</p>
              </>
            )}
          </div>
          <div className="flex text-sm gap-2">
            <p className="text-grey font-light">Last Month:</p>
            <p>{x.prevValue}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPIsList;
