import { Box, TextField } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import BouncyButton from "../../utils/BouncyButton.jsx";
import Footer from "../Footer/Footer.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const CustomInputField = ({ label, rows, value, onChange }) => (
    <TextField
      onChange={onChange}
      value={value}
      sx={{ width: "100%", mb: "2vmax" }}
      multiline
      rows={rows}
      id="standard-basic"
      label={label}
      variant="standard"
      slotProps={{
        inputLabel: {
          sx: { fontWeight: 700, fontFamily: "Montserrat" },
          shrink: true,
        },
      }}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(name, query, email);
  }, [name, query, email]);
  return (
    <>
      <Box
        className="contactForm"
        sx={{
          maxWidth: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          mt: "8vmax",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1vmax 3vmax",
            marginLeft: { xs: "0vmax", md: "12vmax" },
            mb: { xs: "4vmax", md: 0 },
          }}
        >
          <WorkspacesIcon sx={{ color: "#ff00007a" }} />
          <HorizontalRuleIcon sx={{ color: "#ff00007a" }} />
          <Box
            className="headingCont"
            component={"span"}
            sx={{
              textTransform: { xs: "capitalize", md: "uppercase" },
              fontWeight: "700",
              letterSpacing: "1px",
              paddingLeft: "10px",
              color: "#ffffffb0",
            }}
          >
            get in touch
          </Box>
        </Box>
        <Box
          className="contactUs"
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            position: "relative",
            width: { xs: "90vw", md: "60vw" },
            bgcolor: "#2a2929",
            fontWeight: 900,
            marginLeft: { md: "12vmax" },
            m: { xs: "0 auto" },
          }}
        >
          <Box
            className="contactHeading"
            sx={{
              color: "white",
              fontSize: { xs: "3.5vmax", md: "2.4vmax" },
              fontWeight: 700,
              padding: { xs: "5vmax 2.8vmax", md: "2vmax 2.8vmax" },
            }}
          >
            Write A Comment
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "0 2.8vmax",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <TextField
              value={name}
              color="grey"
              onChange={(e) => setName(e.target.value)}
              sx={{
                width: "100%",
                mb: { xs: "4vmax", md: "2vmax" },
                padding: "1vmax 0",
              }}
              multiline
              label={"Your Name"}
              variant="standard"
              focused
              slotProps={{
                inputLabel: {
                  sx: {
                    color: "white",
                    fontWeight: 700,
                    fontFamily: "Montserrat",
                    fontSize: { xs: "2.1vmax", md: "1.2vmax" },
                  },
                },
              }}
            />

            <TextField
              value={mob}
              color="grey"
              onChange={(e) => setMob(e.target.value)}
              sx={{
                width: "100%",
                mb: { xs: "4vmax", md: "2vmax" },
                padding: "1vmax 0",
              }}
              multiline
              label={"Your Mobile No"}
              variant="standard"
              focused
              slotProps={{
                inputLabel: {
                  sx: {
                    color: "white",
                    fontWeight: 700,
                    fontFamily: "Montserrat",
                    fontSize: { xs: "2.1vmax", md: "1.2vmax" },
                  },
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0 2.8vmax",
            }}
          >
            <TextField
              color="grey"
              value={email}
              focused
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                width: "100%",
                mb: { xs: "4vmax", md: "2vmax" },
                padding: "1vmax 0",
              }}
              multiline
              label={"Your Email"}
              variant="standard"
              slotProps={{
                inputLabel: {
                  sx: {
                    color: "white",
                    fontWeight: 700,
                    fontFamily: "Montserrat",
                    fontSize: { xs: "2.1vmax", md: "1.2vmax" },
                  },
                },
              }}
            />

            <TextField
              value={query}
              color="grey"
              onChange={(e) => setQuery(e.target.value)}
              sx={{
                width: "100%",
                mb: { xs: "4vmax", md: "2vmax" },
                padding: "1vmax 0",
              }}
              multiline
              rows={4}
              label={"Your Query"}
              variant="standard"
              focused
              slotProps={{
                inputLabel: {
                  sx: {
                    color: "white",
                    fontWeight: 700,
                    fontFamily: "Montserrat",
                    fontSize: { xs: "2.1vmax", md: "1.2vmax" },
                  },
                },
              }}
            />
          </Box>
          <BouncyButton
            value={"Send Message"}
            styles={{
              width: { xs: "22vmax", md: "10vmax" },
              height: { xs: "6vmax", md: "4vmax" },
              bgcolor: "white",
              color: "#2a2929",
              m: "2vmax",
              borderRadius: "30px",
              fontWeight: 700,
              textTransform: "capitalize",
              padding: "1vmax",
              cursor: "pointer",
            }}
            disp={{ x: 10, y: 10 }}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
