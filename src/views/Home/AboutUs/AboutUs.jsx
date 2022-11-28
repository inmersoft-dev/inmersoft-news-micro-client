// @mui/material
import { Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// components
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// contexts
import { useMode } from "../../../context/ModeProvider";
import { useLanguage } from "../../../context/LanguageProvider";

// images
import aboutUs from "../../../assets/images/aboutUs";

const AboutUs = () => {
  const { modeState } = useMode();
  const { languageState } = useLanguage();

  return (
    <Box
      id="about-us"
      sx={{
        gap: "40px",
        minHeight: "100vh",
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        flexDirection: "column",
        padding: {
          xl: "100px 5rem 20px 5rem",
          lg: "20px 4rem 20px 4rem",
          xs: "20px",
        },
      }}
    >
      <InViewComponent delay="0.1s">
        <Typography variant="h2">
          {languageState.texts.AboutUs.Title}
        </Typography>
      </InViewComponent>
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          marginTop: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            gap: "100px",
            display: "flex",
            flex: "1 1 50%",
            alignItems: "center",
            img: {
              filter: modeState.mode === "light" ? "none" : "invert(1)",
            },
          }}
        >
          <InViewComponent delay="0.1s">
            <SitoImage
              src={aboutUs[languageState.texts.AboutUs.Mission.Image]}
              alt={languageState.texts.AboutUs.Mission.Title}
              sx={{
                width: "200px",
                height: "200px",
                transform: "rotate(20deg)",
              }}
            />
          </InViewComponent>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <InViewComponent delay="0.5s">
              <Typography variant="h3">
                {languageState.texts.AboutUs.Mission.Title}
              </Typography>
            </InViewComponent>
            <InViewComponent delay="0.7s">
              <Typography sx={{ marginLeft: "5px" }} variant="body1">
                {languageState.texts.AboutUs.Mission.Description}
              </Typography>
            </InViewComponent>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          marginTop: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            gap: "100px",
            display: "flex",
            flex: "1 1 50%",
            alignItems: "center",
            img: {
              filter: modeState.mode === "light" ? "none" : "invert(1)",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <InViewComponent delay="0.3s">
              <Typography variant="h3">
                {languageState.texts.AboutUs.Vision.Title}
              </Typography>
            </InViewComponent>
            <InViewComponent delay="0.5s">
              <Typography sx={{ marginLeft: "5px" }} variant="body1">
                {languageState.texts.AboutUs.Vision.Description}
              </Typography>
            </InViewComponent>
          </Box>
          <InViewComponent delay="0.7s">
            <SitoImage
              src={aboutUs[languageState.texts.AboutUs.Vision.Image]}
              alt={languageState.texts.AboutUs.Vision.Title}
              sx={{
                width: "200px",
                height: "200px",
                img: {
                  transform: "rotateY(-180deg)",
                },
              }}
            />
          </InViewComponent>
        </Box>
      </Box>
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          marginTop: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            gap: "100px",
            display: "flex",
            flex: "1 1 50%",
            alignItems: "center",
            img: {
              filter: modeState.mode === "light" ? "none" : "invert(1)",
            },
          }}
        >
          <InViewComponent delay="0.1s">
            <SitoImage
              src={aboutUs[languageState.texts.AboutUs.Extra.Strategy.Image]}
              alt={languageState.texts.AboutUs.Extra.Strategy.Title}
              sx={{
                width: "200px",
                height: "200px",
                img: {
                  transform: "rotateY(-180deg)",
                },
              }}
            />
          </InViewComponent>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <InViewComponent delay="0.3s">
              <Typography variant="h3">
                {languageState.texts.AboutUs.Extra.Strategy.Title}
              </Typography>
            </InViewComponent>
            {languageState.texts.AboutUs.Extra.Strategy.Targets.map(
              (item, i) => (
                <InViewComponent delay={`0.${1 + 3 * (i + 1)}s`} key={item}>
                  <Typography sx={{ marginTop: "10px" }} variant="body1">
                    {item}
                  </Typography>
                </InViewComponent>
              )
            )}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          marginTop: "20px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <InViewComponent delay="1.4s">
          <Box
            sx={{
              gap: "100px",
              display: "flex",
              flex: "1 1 50%",
              alignItems: "center",
              img: {
                filter: modeState.mode === "light" ? "none" : "invert(1)",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h3">
                {languageState.texts.AboutUs.Extra.Objectives.Title}
              </Typography>
              {languageState.texts.AboutUs.Extra.Objectives.Targets.map(
                (item) => (
                  <Typography sx={{ marginTop: "10px" }} variant="body1">
                    {item}
                  </Typography>
                )
              )}
            </Box>
            <SitoImage
              src={aboutUs[languageState.texts.AboutUs.Extra.Objectives.Image]}
              alt={languageState.texts.AboutUs.Extra.Strategy.Title}
              sx={{
                width: "200px",
                height: "200px",
              }}
            />
          </Box>
        </InViewComponent>
      </Box>
    </Box>
  );
};

export default AboutUs;
