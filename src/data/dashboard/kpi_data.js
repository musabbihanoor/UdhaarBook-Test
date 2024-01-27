import { MdShoppingCart } from "react-icons/md";
import { IoPricetagSharp } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";

export const data = [
  {
    icon: <MdShoppingCart />,
    title: "Orders",
    value: 1731,
    status: "up",
    rate: "4.9%",
    prevValue: 1232,
    color: "primary",
  },
  {
    icon: <IoPricetagSharp />,
    title: "Items sold",
    value: 152,
    status: "up",
    rate: "2.3%",
    prevValue: 123,
    color: "green",
  },
  {
    icon: <FaBox />,
    title: "Shipping",
    value: "$856.32",
    status: "up",
    rate: "5.3%",
    prevValue: "$612.23",
    color: "peach",
  },
  {
    icon: <IoBarChart />,
    title: "Gross rate",
    value: "$721.11",
    status: "down",
    rate: "2.3%",
    prevValue: "$423.76",
    color: "purple",
  },
];
