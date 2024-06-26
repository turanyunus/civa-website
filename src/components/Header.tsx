import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Drawer,
  IconButton,
  Stack,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Active button styling func
  const getButtonStyles = (path: string) => {
    return location.pathname === path
      ? { ...styles.button, ...styles.activeButton }
      : styles.button;
  };

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Container maxWidth={false} sx={styles.container}>
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
            <Box component="img" src={logo} alt="logo" />
          </Box>
          <Box sx={styles.menuBox}>
            <Button
              sx={getButtonStyles("/about")}
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
            <Button
              sx={getButtonStyles("/product")}
              onClick={() => navigate("/product")}
            >
              Product
            </Button>
            <Button
              sx={getButtonStyles("/contact")}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
          </Box>
          <Stack sx={styles.menuIcon}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              BackdropProps={{ invisible: true }}
              open={drawerOpen}
              onClose={handleDrawerToggle}
              sx={styles.drawer}
            >
              <List>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <ListItemText
                    primary="Product"
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                    onClick={() => navigate("/product")}
                  />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <ListItemText
                    primary="About Us"
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                    onClick={() => navigate("/about")}
                  />
                </ListItem>
                <ListItem
                  button
                  onClick={handleDrawerToggle}
                  sx={styles.listItem}
                >
                  <ListItemText
                    primary="Contact"
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: "20px",
                      fontFamily: "Inter",
                    }}
                    onClick={() => navigate("/contact")}
                  />
                </ListItem>
              </List>
            </Drawer>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    flexGrow: 1,
  },
  container: {
    maxWidth: { xl: "73%", lg: "100%" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuBox: {
    display: { xs: "none", md: "flex" },
  },
  button: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "18px",
    fontWeight: 700,
    marginRight: 5,
    textTransform: "none",
    borderRadius: "0px",
  },

  activeButton: {
    borderBottom: "3px solid #FFC000",
  },
  menuIcon: {
    display: {
      xs: "block",
      sm: "block",
      md: "none",
      lg: "none",
      xl: "none",
    },
  },
  listItem: {
    padding: "6px 12px",
  },
  drawer: {
    "& .MuiDrawer-paper": {
      width: "100vw",
      height: "25vh",
      backgroundColor: "#FFD454",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      marginTop: 7,
    },
  },
};

export default Header;
