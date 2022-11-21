// @mui/material
import { Box, Divider, Typography } from "@mui/material";

// contexts
import { useLanguage } from "../../../context/LanguageProvider";

// sections
import NoPhoto from "./NoPhoto";
import Lasted from "./Lasted";
import Old from "./Old";

const News = () => {
  const { languageState } = useLanguage();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
