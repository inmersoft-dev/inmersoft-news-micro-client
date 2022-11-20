import { Link } from "react-router-dom";

// sito components
import SitoContainer from "sito-container";

// contexts
import { useLanguage } from "../../context/LanguageProvider";

const Navbar = () => {
  const { languageState } = useLanguage();

  return (
    <SitoContainer justifyContent="space-between" alignItems="center">
      <SitoContainer
        sx={{ width: "70px", height: "50px", background: "black" }}
      ></SitoContainer>
      <SitoContainer></SitoContainer>
      <SitoContainer>
        {languageState.texts.Navbar.Links.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
};

export default Navbar;
