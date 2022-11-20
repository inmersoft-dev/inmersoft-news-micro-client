// sito components
import { Typography } from "@mui/material";

// sito components
import SitoContainer from "sito-container";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

const Footer = () => {
  const { languageState } = useLanguage();
  return (
    <SitoContainer justifyContent="space-between">
      <Typography variant="caption">
        {languageState.texts.Footer.Company}
      </Typography>
      <Typography variant="caption">
        {languageState.texts.Footer.Date}
      </Typography>
    </SitoContainer>
  );
};

export default Footer;
