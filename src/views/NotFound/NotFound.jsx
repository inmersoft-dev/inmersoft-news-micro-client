// @mui/material
import { Box, Typography } from "@mui/material";

// context
import { useLanguage } from "../../context/LanguageProvider";

// components
import InViewComponent from "../../components/InViewComponent/InViewComponent";

// styles
import "./style.css";

const NotFound = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        gap: "100px",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          paddingLeft: "40px",
        }}
      >
        <InViewComponent>
          <Typography variant="h2" sx={{ position: "relative", float: "left" }}>
            {languageState.texts.NotFound.Title}
          </Typography>
        </InViewComponent>
      </Box>
    </Box>
  );
};

export default NotFound;
