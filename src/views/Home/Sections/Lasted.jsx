// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// local
import { lasted } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

// image
import noBigImage from "../../../assets/images/noBigPhoto.jpg";

const Lasted = () => {
  return (
    <InViewComponent delay="0.1s">
      <SitoContainer
        flexDirection="column"
        sx={{ height: "100%", margin: "0 40px" }}
      >
        <SitoImage
          src={lasted.image || noBigImage}
          alt={lasted.title}
          sx={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />

        <NewsBody item={{ ...lasted }} />
      </SitoContainer>
    </InViewComponent>
  );
};

export default Lasted;
