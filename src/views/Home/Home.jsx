// sito components
import SitoContainer from "sito-container";

// sections
import NoPhoto from "./Sections/NoPhoto";
import Lasted from "./Sections/Lasted";
import Old from "./Sections/Old";

const Home = () => {
  return (
    <SitoContainer sx={{ height: "100%" }}>
      <NoPhoto />
      <Lasted />
      <Old />
    </SitoContainer>
  );
};

export default Home;
