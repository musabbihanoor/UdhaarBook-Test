import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { MdOutlineStore } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

import { data } from "../data/sidebar";

const drawerWidth = 230;

// Handles the collapse of sidebar
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Style sidebar according to collapse
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: theme.palette.white,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: theme.palette.white,
    },
  }),
}));

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open} className="bg-[#fff]">
      {/* Sidebar header */}
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          <MdOutlineStore className="text-primary text-3xl" />
        </IconButton>
        {open && (
          <>
            <h1 className="text-2xl flex-1">MileTap</h1>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </>
        )}
      </DrawerHeader>

      {/* Sidebar menu */}
      <div className="flex flex-col h-full justify-between">
        <List>
          {data.map((item, i) => (
            <Link
              key={i}
              to={item.route}
              className="flex items-center px-[10px]"
            >
              {item.icon}
              {open && <p>{item.name}</p>}
            </Link>
          ))}
        </List>

        <Link to="/about" className="flex items-center px-[8px]">
          <MdAccountCircle className="text-primary text-2xl m-[10px]" />
          {open && <p>About Me</p>}
        </Link>
      </div>
    </Drawer>
  );
};
