import { Box, Button } from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <Box display="flex" gap="2%" justifyContent="space-between">
      <Box
        width={"49%"}
        padding="0px 30px"
        display="flex"
        gap="2%"
        flexDirection="column"
        justifyContent="center"
      >
        <h1 style={{ margin: "0px 5px" }}>Discover</h1>
        <h2 style={{ margin: "0px 5px" }}>New Destinations</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
          temporibus? Perferendis dicta facere quam labore, necessitatibus
          sapiente unde nisi velit animi eveniet temporibus quae. Autem numquam
          consequuntur natus quam nulla.
        </p>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={"38%"}
        >
          <Button
            style={{ backgroundColor: "#6246e5", border: "1px solid #6246e5" }}
            variant="contained"
          >
            Join Now
          </Button>
          <Button
            style={{ border: "1px solid #6246e5", color: "#6246e5" }}
            variant="outlined"
          >
            Why Join
          </Button>
        </Box>
      </Box>
      <Box width={"45%"} padding="0px 30px">
        <img style={{ width: "100%" }} src="./mainImage.png" alt="" />
      </Box>
    </Box>
  );
};

export default Main;
