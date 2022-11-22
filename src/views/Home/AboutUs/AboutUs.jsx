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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: {
          xl: "100px 5rem 20px 5rem",
          lg: "20px 4rem 20px 4rem",
          xs: "20px",
        },
      }}
    >
      <InViewComponent>
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
        {Object.values(languageState.texts.AboutUs.Main).map((item, i) => (
          <InViewComponent delay={`0.${i + 4}s`} key={i}>
            <Box
              sx={{
                gap: "30px",
                display: "flex",
                flex: "1 1 40%",
                alignItems: "center",
              }}
            >
              <SitoImage
                src={aboutUs[item.Image]}
                alt={item.Title}
                sx={{
                  width: "150px",
                  height: "150px",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h3">{item.Title}</Typography>
                <Typography sx={{ marginLeft: "5px" }} variant="body1">
                  {item.Description}
                </Typography>
              </Box>
            </Box>
          </InViewComponent>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;
