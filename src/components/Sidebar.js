import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../data/sidebar";

import { MdOutlineDashboard } from "react-icons/md";

const drawerWidth = 230;

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
  const [active, setActive] = useState("Dashboard");

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" open={open} className="bg-[#fff]">
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          <MdOutlineDashboard className="text-primary text-3xl" />{" "}
        </IconButton>
        {open && (
          <>
            <h1 className="text-2xl flex-1">IntelliSuite</h1>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </>
        )}
      </DrawerHeader>
      <List>
        {data.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </List>

      {open && (
        <p className="text-[10px] text-center font-poppins">
          <span className="font-semibold">
            IntelliSuite Administrador Dashboard
          </span>{" "}
          <br /> Copyright © 2024
        </p>
      )}
    </Drawer>
  );
};

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

const Item = ({ item }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleClick} onMouseLeave={handleClose}>
      <Link to={item.route} className="bg-primary">
        <img
          alt={item.name}
          src={process.env.PUBLIC_URL + "/pngs/sidebar/" + item.icon}
        />
        <p>{item.name}</p>
      </Link>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

/* <ListItem
              key={i}
              className={`block my-1 border-l-[5px] ${
                active === item.name
                  ? "border-l-primary bg-[#eee]"
                  : "border-l-transparent bg-transparent"
              }`}
              disablePadding
            >
              <ListItemButton
                onClick={() => setActive(item.name)}
                className={`min-h-[48px] px-10 ${
                  open ? "justify-initial" : "justify-center"
                }`}
              >
                <Box
                  className={`min-w-0 ${
                    open ? "mr-3" : "mr-auto"
                  } justify-center`}
                >
                  <img
                    alt={item.name}
                    src={process.env.PUBLIC_URL + "/pngs/sidebar/" + item.icon}
                  />
                </Box>

                {open && (
                  <div className="flex items-center justify-start gap-3 w-full">
                    <ListItemText
                      primary={item.name}
                      className={`${
                        active === item.name
                          ? "text-primary italic"
                          : "text-dark-grey"
                      }`}
                    />
                  </div>
                )}
              </ListItemButton>
            </ListItem> */
