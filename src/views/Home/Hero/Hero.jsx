import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// animation
import { hoverUnderline } from "../../../animation/animation";

const Hero = () => {
  const { languageState } = useLanguage();

  const [hoverA, setHoverA] = useState(false);
  const [hoverB, setHoverB] = useState(false);

  useEffect(() => {
    if (hoverA)
      setTimeout(() => {
        setHoverA(false);
        setTimeout(() => {
          setHoverB(false);
        }, 200);
      }, 300);
    else
      setTimeout(() => {
        setHoverA(true);
        setTimeout(() => {
          setHoverB(true);
        }, 100);
      }, 10000);
  }, [hoverA]);

  useEffect(() => {
    setTimeout(() => {
      setHoverA(true);
      setTimeout(() => {
        setHoverB(true);
      }, 100);
    }, 1200);
  }, []);

  return (
    <Box
      sx={{
        height: "calc(100vh - 70px)",
        display: "flex",
        justifyContent: { md: "flex-start", xs: "center" },
        alignItems: { md: "flex-end", xs: "flex-start" },
        paddingBottom: "100px",
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InViewComponent>
          <Typography
            variant="h1"
            sx={{
              fontSize: { lg: "8rem", md: "6rem" },
              ...hoverUnderline,
              "&:after": {
                ...hoverUnderline["&:after"],
                height: "4px",
                bottom: "15px",
                left: "8px",
                ...(hoverA ? hoverUnderline["&:hover"]["&:after"] : {}),
              },
            }}
          >
            {languageState.texts.Hero.Title}
          </Typography>
        </InViewComponent>
        <InViewComponent delay="0.4s">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xl: "12rem", lg: "10rem", md: "8rem" },
              ...hoverUnderline,
              "&:after": {
                ...hoverUnderline["&:after"],
                height: "4px",
                bottom: "15px",
                left: "8px",
                ...(hoverB ? hoverUnderline["&:hover"]["&:after"] : {}),
              },
            }}
          >
            {languageState.texts.Hero.Company}
          </Typography>
        </InViewComponent>
      </Box>
      <Box sx={{ marginBottom: { md: "4%" }, marginLeft: "10px" }}>
        <InViewComponent delay="0.5s">
          <Typography
            sx={{
              width: "55%",
            }}
          >
            {languageState.texts.Hero.Description}{" "}
            <Link
              className={css({
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                ...hoverUnderline,
              })}
            >
              {languageState.texts.Hero.Button}
            </Link>
          </Typography>
        </InViewComponent>
      </Box>
    </Box>
  );
};

export default Hero;
