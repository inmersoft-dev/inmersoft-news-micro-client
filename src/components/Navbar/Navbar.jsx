import { Link } from "react-router-dom";

// @mui/material
import { Divider, Link as MUILink, Typography } from "@mui/material";

// animation
import { hoverUnderline } from "../../animation/animation";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

// images
import logoHorizontal from "../../assets/images/logo-horizontal.png";

const Navbar = () => {
  const { languageState } = useLanguage();

  return (
    <SitoContainer justifyContent="space-between" alignItems="center">
      <Link to="/">
        <SitoImage
          src={logoHorizontal}
          alt="logo"
          sx={{ width: "200px", height: "55px", filter: "grayscale(1)" }}
        />
      </Link>
      <SitoContainer>
        <MUILink
          underline="none"
          fontWeight="bold"
          variant="caption"
          sx={{ marginRight: "10px", marginTop: "1px", ...hoverUnderline }}
          href={`tel:${languageState.texts.Navbar.Contact.Number.Number}`}
        >
          {languageState.texts.Navbar.Contact.Number.Text} (
          {languageState.texts.Navbar.Contact.Number.Number})
        </MUILink>
        <Divider
          sx={{
            height: "20px",
            border: "1px solid",
            transform: "rotate(10deg)",
          }}
        />
        <MUILink
          underline="none"
          fontWeight="bold"
          variant="caption"
          sx={{ marginLeft: "10px", ...hoverUnderline }}
          href={`mailto:${languageState.texts.Navbar.Contact.Email}`}
        >
          {languageState.texts.Navbar.Contact.Email}
        </MUILink>
      </SitoContainer>
      <SitoContainer sx={{ gap: "30px" }}>
        {languageState.texts.Navbar.Links.map((item) => (
          <Link key={item.to} to={item.to}>
            <Typography
              color="primary"
              variant="caption"
              sx={{ ...hoverUnderline }}
            >
              {item.label}
            </Typography>
          </Link>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
};

export default Navbar;
