import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0e0e0e",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1000,
        top:0,
        left:0,
        position:'fixed',
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Loading Animation */}
      <Box
        sx={{
          width: "50px",
          height: "50px",
          border: "5px solid #ffffff33",
          borderTop: "5px solid #ffffff",
          borderRadius: "50%",
          animation: `${spin} 1s linear infinite`,
        }}
      ></Box>
      {/* Loading Text */}
      <Typography
        sx={{
          color: "white",
          fontSize: "1.5rem",
          marginTop: "20px",
          fontWeight: "bold",
          letterSpacing: "0.1em",
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingPage;
