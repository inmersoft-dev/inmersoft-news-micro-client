// @mui/material
import { Box, Typography } from "@mui/material";

// sito components
import SitoImage from "sito-image";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// images
import aboutUs from "../../../assets/images/aboutUs";

const AboutUs = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      id="about-us"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xl: "20px 5rem", lg: "20px 4rem", xs: "20px" },
        gap: "40px",
      }}
    >
      {Object.values(languageState.texts.AboutUs).map((item) => (
        <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <SitoImage
            src={aboutUs[item.Image]}
            alt={item.Title}
            sx={{ width: "150px", height: "150px" }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h3">{item.Title}</Typography>
            <Typography variant="body1">{item.Description}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AboutUs;
