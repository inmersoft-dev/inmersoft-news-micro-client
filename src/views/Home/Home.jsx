// sito components
import SitoContainer from "sito-container";

// sections

import News from "./News/News";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <News />
      <AboutUs />
    </SitoContainer>
  );
};

export default Home;
