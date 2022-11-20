// @mui/material
import { Divider, Typography } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

// sections
import NoPhoto from "./Sections/NoPhoto";
import Lasted from "./Sections/Lasted";
import Old from "./Sections/Old";

const Home = () => {
  const { languageState } = useLanguage();

  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
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
      <SitoContainer>
        <NoPhoto />
        <Lasted />
        <Old />
      </SitoContainer>
    </SitoContainer>
  );
};

export default Home;
