// sito components
import SitoContainer from "sito-container";

// locals
import { noPhotoNews } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";

const NoPhoto = () => {
  return (
    <SitoContainer flexDirection="column">
      {noPhotoNews.map((item) => (
        <SitoContainer
          flexDirection="column"
          key={item.id}
          sx={{ marginBottom: "40px" }}
        >
          <NewsBody item={{ ...item }} />
        </SitoContainer>
      ))}
    </SitoContainer>
  );
};

export default NoPhoto;
