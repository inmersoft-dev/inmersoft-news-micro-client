// sito components
import SitoContainer from "sito-container";

// sections

import News from "./News/News";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <SitoContainer flexDirection="column" sx={{ height: "100%" }}>
      <Hero />
      <News />
    </SitoContainer>
  );
};

export default Home;
