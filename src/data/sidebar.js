import { BiFoodMenu } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaRandomSolid } from "react-icons/lia";

export const data = [
  {
    name: "Menu",
    icon: <BiFoodMenu className="text-primary text-2xl m-[8px]" />,
    chevron: false,
    route: "/",
  },
  {
    name: "My Favorites",
    icon: <MdFavoriteBorder className="text-primary text-2xl m-[8px]" />,
    chevron: false,
    route: "/favorites",
  },
  {
    name: "Random Meal",
    icon: <LiaRandomSolid className="text-primary text-2xl m-[8px]" />,
    chevron: true,
    route: "/random",
  },
];
