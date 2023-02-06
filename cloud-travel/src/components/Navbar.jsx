import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="10px 70px"
      borderBottom="1px solid gray"
      position="sticky"
      top="0px"
      backgroundColor="white"
    >
      <Box width="120px">
        <img
          style={{ width: "100%" }}
          src="./cloud-travel-logo.png"
          alt="cloud travel logo"
        />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={"45%"}
        color="#696a6c"
      >
        <h3>Home</h3>
        <h3>Travel</h3>
        <h3>Explore</h3>
        <h3>Vacation</h3>
        <h3>Blog</h3>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width={"15%"}
      >
        <Link to="/login">
          <Button
            style={{ border: "1px solid #6246e5", color: "#6246e5" }}
            variant="outlined"
          >
            Sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button
            style={{ backgroundColor: "#6246e5", border: "1px solid #6246e5" }}
            variant="contained"
          >
            Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
