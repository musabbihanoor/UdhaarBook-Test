import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTheme } from "@mui/system";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../data/sidebar";

const drawerWidth = 250;

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
    <Drawer variant="permanent" open={open} className="font-gotham bg-white">
      <DrawerHeader>
        {open && (
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/pngs/sidebar/logo.png"}
            className="w-[180px]"
          />
        )}
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
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
                backgroundColor:
                  active === item.name
                    ? theme.palette.lightGrey
                    : "transparent",
                borderLeftColor:
                  active === item.name ? theme.palette.darkGrey : "transparent",
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
                        color: theme.palette.darkGrey,
                        flex: "none",
                        fontStyle: active === item.name ? "italic" : "normal",
                      }}
                    />

                    {item.count > 0 && (
                      <p className="bg-dark-grey text-white rounded-lg px-2 py-1 text-sm">
                        {item.count}
                      </p>
                    )}
                  </div>
                )}
                {item.chevron && open && (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      opacity: 0.5,
                    }}
                  >
                    <ChevronRightIcon />
                  </ListItemIcon>
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
              className="flex items-center bg-dark-grey m-1 py-2 w-full justify-center rounded-full text-white"
              to="/product/add"
            >
              <img
                className="mr-2"
                alt="logo"
                src={process.env.PUBLIC_URL + "/pngs/add-circle.png"}
              />
              Agregar Producto
            </Link>
          </Button>
          <Button
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Link
              className="flex items-center bg-basic-red m-1 py-2 w-full justify-center rounded-full text-white"
              to="/banner/add"
            >
              <img
                className="mr-2"
                alt="logo"
                src={process.env.PUBLIC_URL + "/pngs/add-circle.png"}
              />
              Agregar banner
            </Link>
          </Button>

          <p className="text-[10px] text-center font-poppins">
            <span className="font-semibold">
              Pollo Victorina Administrador Dashboard
            </span>{" "}
            <br /> © 2023 Todos los Derechos Reservados
          </p>
        </>
      )}
    </Drawer>
  );
};
