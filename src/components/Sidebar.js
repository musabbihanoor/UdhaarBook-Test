import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useTheme } from "@mui/system";
import { Box, Button } from "@mui/material";
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
  const theme = useTheme(); // Get the current theme

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
          <Link to={item.route}>
            <ListItem
              key={i}
              disablePadding
              sx={{
                display: "block",
                marginY: 1,
                borderLeft: "5px solid",
                backgroundColor: active === item.name ? "#eee" : "transparent",
                borderLeftColor:
                  active === item.name
                    ? theme.palette.primary.main
                    : "transparent",
              }}
            >
              <ListItemButton
                onClick={() => setActive(item.name)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <Box
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
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
                      sx={{
                        color:
                          active === item.name
                            ? theme.palette.primary.main
                            : theme.palette.darkGrey,
                        fontWeight: active === item.name ? "900" : "500",
                        flex: "none",
                        fontStyle: active === item.name ? "italic" : "normal",
                      }}
                    />
                  </div>
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      {open && (
        <>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Link
              className="flex items-center bg-[#ccc] m-1 py-2 w-full justify-center rounded-full text-black"
              to="/product/add"
            >
              Add Product
            </Link>
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Link
              className="flex items-center bg-primary m-1 py-2 w-full justify-center rounded-full text-white"
              to="/banner/add"
            >
              Track Order
            </Link>
          </Button>

          <p className="text-[10px] text-center font-poppins">
            <span className="font-semibold">
              IntelliSuite Administrador Dashboard
            </span>{" "}
            <br /> Copyright © 2024
          </p>
        </>
      )}
    </Drawer>
  );
};
