import PropTypes from "prop-types";

// sito components
import SitoContainer from "sito-container";

// @mui/material
import { Box } from "@mui/material";

// locals
import { noPhotoNews } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

const NoPhoto = (props) => {
  const { flexOrder } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", lg: "column" },
        gap: "20px",
        order: {
          xs: flexOrder,
          md: 2,
          lg: 0,
        },
      }}
    >
      {noPhotoNews.map((item, i) => (
        <InViewComponent
          delay={`0.${i + 2}s`}
          key={item.id}
          sx={{
            marginBottom: { xs: "20px", md: "40px" },
            width: { xs: "100%", md: "50%", lg: "100%" },
            flexDirection: "column",
            display: "flex",
          }}
        >
          <NewsBody item={{ ...item }} fullLink />
        </InViewComponent>
      ))}
    </Box>
  );
};

NoPhoto.defaultProps = {
  flexOrder: 1,
};

NoPhoto.propTypes = {
  flexOrder: PropTypes.number,
};

export default NoPhoto;
