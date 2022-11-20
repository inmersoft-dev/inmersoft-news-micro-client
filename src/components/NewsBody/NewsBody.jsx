import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography } from "@mui/material";

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

const NewsContent = (props) => {
  const { item, hideUserImage, hasImage } = props;
  return (
    <>
      {!hideUserImage ? (
        <Typography fontWeight="bold" variant="h5">
          {item.title}
        </Typography>
      ) : null}
      {!hasImage ? (
        <Box
          flexDirection="column"
          sx={{ marginTop: { xs: "10px", md: "20px" } }}
        >
          <Typography variant="body1">{item.shortDescription}</Typography>
          <Typography variant="caption">{parseDate(item.date)}</Typography>
        </Box>
      ) : (
        <SitoImage
          sx={{ width: "100%", height: "250px", objectFit: "cover" }}
          src={item.image || noMediumPhoto}
          alt={item.title}
        />
      )}
    </>
  );
};

NewsContent.defaultProps = {
  hasImage: false,
  hideUserImage: false,
};

NewsContent.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    shortDescription: PropTypes.string,
    date: PropTypes.number,
    author: PropTypes.shape({ name: PropTypes.string, role: PropTypes.string }),
  }),
  hasImage: PropTypes.bool,
  hideUserImage: PropTypes.bool,
};

const NewsBody = (props) => {
  const { item, hasImage, hideUserImage, fullLink } = props;

  const { languageState } = useLanguage();

  return (
    <>
      {fullLink ? (
        <Link
          to={`/details?id=${item.id}`}
          className={css({ textDecoration: "none", color: "inherit" })}
        >
          <NewsContent
            item={item}
            hasImage={hasImage}
            hideUserImage={hideUserImage}
          />
        </Link>
      ) : (
        <NewsContent
          item={item}
          hasImage={hasImage}
          hideUserImage={hideUserImage}
        />
      )}
      {hideUserImage ? (
        <Typography fontWeight="bold" variant="h5" sx={{ marginTop: "10px" }}>
          {item.title}
        </Typography>
      ) : null}
      <Link
        to={`/search?user=${item.author.id}`}
        className={css({ textDecoration: "none", color: "inherit" })}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: {
              xs: !hideUserImage ? "20px" : "10px",
              md: !hideUserImage ? "40px" : "20px",
            },
          }}
        >
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
        </Box>
      </Link>
    </>
  );
};

NewsBody.defaultProps = {
  hasImage: false,
  fullLink: false,
  hideUserImage: false,
};

NewsBody.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    shortDescription: PropTypes.string,
    date: PropTypes.number,
    author: PropTypes.shape({ name: PropTypes.string, role: PropTypes.string }),
  }),
  fullLink: PropTypes.bool,
  hasImage: PropTypes.bool,
  hideUserImage: PropTypes.bool,
};

export default NewsBody;
