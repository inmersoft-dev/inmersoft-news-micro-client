import { useState } from "react";
import { Link } from "react-router-dom";

// @mui/material
import {
  Box,
  Divider,
  Link as MUILink,
  Typography,
  Button,
} from "@mui/material";

// @mui/icons-material
import MenuIcon from "@mui/icons-material/Menu";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// components
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

// animation
import { hoverUnderline } from "../../animation/animation";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

// images
import logoHorizontal from "../../assets/images/logo-horizontal.png";

const Navbar = () => {
  const { languageState } = useLanguage();

  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <SitoContainer justifyContent="space-between" alignItems="center">
      <Link to="/">
        <SitoImage
          src={logoHorizontal}
          alt="logo"
          sx={{ width: "200px", height: "55px", filter: "grayscale(1)" }}
        />
      </Link>
      <Box sx={{ display: { md: "flex", xs: "none" } }}>
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
      </Box>
      <Box sx={{ gap: "30px", display: { xs: "none", md: "flex" } }}>
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
      </Box>
      <Button
        onClick={() => setShowDrawer(true)}
        variant="contained"
        sx={{
          display: { xs: "inherit", md: "none" },
          width: "40px",
          height: "40px",
          minHeight: 0,
          minWidth: 0,
          padding: 0,
          borderRadius: "100%",
        }}
      >
        <MenuIcon />
      </Button>
      <NavigationDrawer
        open={showDrawer}
        handleClose={() => setShowDrawer(false)}
      />
    </SitoContainer>
  );
};

export default Navbar;
