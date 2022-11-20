// sito components
import SitoContainer from "sito-container";

// locals
import { old } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";

const Old = () => {
  return (
    <SitoContainer flexDirection="column">
      {old.map((item) => (
        <SitoContainer
          flexDirection="column"
          key={item.id}
          sx={{ marginBottom: "40px" }}
        >
          <NewsBody item={{ ...item }} hasImage hideUserImage />
        </SitoContainer>
      ))}
    </SitoContainer>
  );
};

export default Old;
