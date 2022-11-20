// sito components
import SitoContainer from "sito-container";

// locals
import { noPhotoNews } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

const NoPhoto = () => {
  return (
    <SitoContainer flexDirection="column">
      {noPhotoNews.map((item, i) => (
        <InViewComponent delay={`0.${i + 2}s`} key={item.id}>
          <SitoContainer flexDirection="column" sx={{ marginBottom: "40px" }}>
            <NewsBody item={{ ...item }} />
          </SitoContainer>
        </InViewComponent>
      ))}
    </SitoContainer>
  );
};

export default NoPhoto;
