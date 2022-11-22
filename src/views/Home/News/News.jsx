// @mui/material
import { useTheme, Box, Divider, Typography } from "@mui/material";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// sections
import NoPhoto from "./NoPhoto";
import Lasted from "./Lasted";
import Old from "./Old";

const News = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      id="news"
      sx={{
        display: "flex",
        flexDirection: "column",
        background: theme.palette.background.paper,
        padding: { xl: "20px 5rem", lg: "20px 4rem", xs: "20px" },
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ margin: "40px auto 0 auto" }}
      >
        {languageState.texts.Home.Title}
      </Typography>
      <Divider
        orientation="horizontal"
        sx={{
          border: "2px solid",
          margin: "auto",
          width: "360px",
          borderRadius: "40px",
          marginBottom: "40px",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}>
        <NoPhoto />
        <Lasted />
        <Old />
      </Box>
    </Box>
  );
};

export default News;
