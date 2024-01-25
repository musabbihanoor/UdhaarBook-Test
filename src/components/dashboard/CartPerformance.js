import React from "react";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";

const CartPerformance = () => {
  const data = [
    {
      title: "Initiated",
      subText: "Session: 2623",
      status: "up",
      rate: 42.5,
    },
    {
      title: "Abandonment rate",
      subText: "70 of 85",
      status: "down",
      rate: 30,
    },
    {
      title: "Bounce rate",
      subText: "70 of 100",
      status: "up",
      rate: 72,
    },
    {
      title: "Completion rate",
      subText: "83 of 100",
      status: "up",
      rate: 86,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-lg drop-shadow">
      <div className="mb-5">
        <h1 className="text-[20px] font-bold">Shopping cart performance</h1>
        <p className="text-[12px] text-grey font-light">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      {data.map((x, i) => (
        <ProgressBar data={x} />
      ))}
    </div>
  );
};

export default CartPerformance;

const ProgressBar = ({
  data: { title, subText, status, rate },
  index,
  colors,
}) => {
  return (
    <div className="my-2">
      <div className="w-full flex justify-between gap-5 items-center ">
        <div className="mb-2">
          <p className="w-28 whitespace-nowrap text-dark-grey text-sm">
            {title}
          </p>
          <p className="text-grey text-xs">{subText}</p>
        </div>
        <div className="flex gap-3 items-center my-3">
          {status === "up" && (
            <>
              <span className="text-green text-xl">
                <BsGraphUp />
              </span>
              <p className="text-green">{rate}</p>
            </>
          )}
          {status === "down" && (
            <>
              <span className="text-red text-xl">
                <BsGraphDown />
              </span>
              <p className="text-red">{rate}</p>
            </>
          )}
        </div>
      </div>
      <div className="bg-[#ccc] h-2 rounded-full">
        <div
          style={{
            width: `${rate}%`, //the inner div show the progress by width
          }}
          className={`h-full w-full rounded-full ${
            status === "down" && "bg-red"
          } ${status === "up" && "bg-primary"}`}
        ></div>
      </div>
    </div>
  );
};
