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
import { useMode } from "../../../context/ModeProvider";

// animation
import { hoverUnderline } from "../../../animation/animation";

const Hero = () => {
  const { modeState } = useMode();
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
        gap: "20px",
        display: "flex",
        paddingBottom: "",
        height: "calc(100vh - 70px)",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "flex-end", xs: "flex-start" },
        justifyContent: { md: "flex-start", xs: "center" },
        padding: {
          xl: "20px 5rem 100px 5rem",
          lg: "20px 5rem 100px 4rem",
          xs: "20px",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <InViewComponent>
          <Link
            onClick={(e) => {
              const news = document.getElementById("news");
              if (news !== null) news.scrollIntoView();
              e.preventDefault();
            }}
            className={css({ color: "inherit", textDecoration: "none" })}
            to="/#news"
          >
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
                  backgroundColor:
                    modeState.mode === "light" ? "black" : "white",
                  ...(hoverA ? hoverUnderline["&:hover"]["&:after"] : {}),
                },
              }}
            >
              {languageState.texts.Hero.Title}
            </Typography>
          </Link>
        </InViewComponent>
        <InViewComponent delay="0.4s">
          <Link
            className={css({ color: "inherit", textDecoration: "none" })}
            onClick={(e) => {
              const aboutUs = document.getElementById("about-us");
              if (aboutUs !== null) aboutUs.scrollIntoView();
              e.preventDefault();
            }}
            to="/#about-us"
          >
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
                  backgroundColor:
                    modeState.mode === "light" ? "black" : "white",
                  ...(hoverB ? hoverUnderline["&:hover"]["&:after"] : {}),
                },
              }}
            >
              {languageState.texts.Hero.Company}
            </Typography>
          </Link>
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
                color: "inherit",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                ...hoverUnderline,
                "&:after": {
                  ...hoverUnderline["&:after"],
                  backgroundColor:
                    modeState.mode === "light" ? "black" : "white",
                },
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
