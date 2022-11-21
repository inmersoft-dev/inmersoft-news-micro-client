// sito components
import SitoImage from "sito-image";

// @mui/material
import { Box } from "@mui/material";

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
      <Box
        flexDirection="column"
        sx={{
          height: "100%",
          margin: { lg: "0 40px", md: "0 0 20px 0", xs: "0" },
        }}
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
      </Box>
    </InViewComponent>
  );
};

export default Lasted;
