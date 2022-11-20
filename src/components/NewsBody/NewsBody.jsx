import PropTypes from "prop-types";

// @mui/material
import { Typography } from "@mui/material";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// utils
import { parseDate } from "../../utils/parsers";

// context
import { useLanguage } from "../../context/LanguageProvider";

// images
import noPhoto from "../../assets/images/noPhoto.png";
import noMediumPhoto from "../../assets/images/noMediumPhoto.jpg";

const NewsBody = (props) => {
  const { item, hasImage, hideUserImage } = props;

  const { languageState } = useLanguage();

  return (
    <>
      {!hideUserImage ? (
        <Typography fontWeight="bold" variant="h5">
          {item.title}
        </Typography>
      ) : null}
      {!hasImage ? (
        <SitoContainer flexDirection="column" sx={{ marginTop: "20px" }}>
          <Typography variant="body1">{item.shortDescription}</Typography>
          <Typography variant="caption">{parseDate(item.date)}</Typography>
        </SitoContainer>
      ) : (
        <SitoImage
          sx={{ width: "100%", height: "250px", objectFit: "cover" }}
          src={item.image || noMediumPhoto}
          alt={item.title}
        />
      )}
      {hideUserImage ? (
        <Typography fontWeight="bold" variant="h5" sx={{ marginTop: "10px" }}>
          {item.title}
        </Typography>
      ) : null}

      <SitoContainer sx={{ marginTop: !hideUserImage ? "40px" : "20px" }}>
        {!hideUserImage ? (
          <SitoImage
            sx={{ width: "48x", height: "48px", borderRadius: "40%" }}
            src={item.author.photoUrl || noPhoto}
            alt={item.author.name}
          />
        ) : null}
        <SitoContainer
          flexDirection="column"
          sx={{ marginLeft: !hideUserImage ? "10px" : 0 }}
        >
          <Typography
            fontWeight={!hideUserImage ? "bold" : null}
            variant="subtitle1"
          >
            {hideUserImage ? `${languageState.texts.NewsBody.by} ` : null}
            {item.author.name}
          </Typography>
          {!hideUserImage ? (
            <Typography variant="caption">{item.author.role}</Typography>
          ) : null}
        </SitoContainer>
      </SitoContainer>
    </>
  );
};

NewsBody.defaultProps = {
  hasImage: false,
  hideUserImage: false,
};

NewsBody.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    shortDescription: PropTypes.string,
    date: PropTypes.number,
    author: PropTypes.shape({ name: PropTypes.string, role: PropTypes.string }),
  }),
  hasImage: PropTypes.bool,
  hideUserImage: PropTypes.bool,
};

export default NewsBody;