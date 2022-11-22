import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// @emotion/css
import { css } from "@emotion/css";

// @mui/material
import { Box, Typography, Button, Link as MUILink } from "@mui/material";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// animation
import { hoverUnderline } from "../../animation/animation";

// utils
import { parseDate } from "../../utils/parsers";

// context
import { useMode } from "../../context/ModeProvider";
import { useLanguage } from "../../context/LanguageProvider";

// images
import noPhoto from "../../assets/images/noPhoto.png";
import noMediumPhoto from "../../assets/images/noMediumPhoto.jpg";

const NewsContent = (props) => {
  const { modeState } = useMode();

  const { item, hideUserImage, hasImage, fullLink } = props;

  return (
    <Box
      sx={
        fullLink
          ? {
              h5: {
                "&:after": {
                  ...hoverUnderline["&:after"],
                  backgroundColor:
                    modeState.state === "light" ? "black" : "white",
                },
              },
              "&:hover": {
                h5: {
                  ...hoverUnderline["&:hover"]["&:after"],
                },
              },
            }
          : {}
      }
    >
      {!hideUserImage ? (
        <Typography
          fontWeight="bold"
          variant="h5"
          sx={
            fullLink
              ? {
                  ...hoverUnderline,
                  "&:after": {
                    ...hoverUnderline["&:after"],
                    backgroundColor:
                      modeState.mode === "light" ? "black" : "white",
                  },
                }
              : {}
          }
        >
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
        <Typography
          fontWeight="bold"
          variant="h5"
          sx={{
            marginTop: "10px",
            ...(fullLink
              ? {
                  ...hoverUnderline,
                  "&:after": {
                    ...hoverUnderline["&:after"],
                    backgroundColor:
                      modeState.mode === "light" ? "black" : "white",
                  },
                }
              : {}),
          }}
        >
          {item.title}
        </Typography>
      ) : null}
    </Box>
  );
};

NewsContent.defaultProps = {
  fullLink: true,
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
  fullLink: PropTypes.bool,
  hasImage: PropTypes.bool,
  hideUserImage: PropTypes.bool,
};

const NewsBody = (props) => {
  const { item, hasImage, hideUserImage, fullLink } = props;

  const { modeState } = useMode();
  const { languageState } = useLanguage();

  return (
    <Box>
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
          fullLink={false}
        />
      )}
      {!fullLink ? (
        <Button
          variant="contained"
          sx={{ marginTop: !hideUserImage ? "40px" : "20px" }}
        >
          <MUILink
            color="inherit"
            underline="none"
            to={`/details?id=${item.id}`}
          >
            {languageState.texts.NewsBody.ReadMore}
          </MUILink>
        </Button>
      ) : null}
      <Link
        to={`/search?user=${item.author.id}`}
        className={css({ textDecoration: "none", color: "inherit" })}
      >
        <SitoContainer
          sx={{
            marginTop: !hideUserImage ? "40px" : "20px",
            h6: {
              "&:after": {
                ...hoverUnderline["&:after"],
                backgroundColor:
                  modeState.state === "light" ? "black" : "white",
              },
            },
            "&:hover": {
              h6: {
                "&:after": {
                  ...hoverUnderline["&:hover"]["&:after"],
                },
              },
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
              sx={{
                ...hoverUnderline,
                "&:after": {
                  ...hoverUnderline["&:after"],
                  backgroundColor:
                    modeState.mode === "light" ? "black" : "white",
                },
              }}
            >
              {hideUserImage ? `${languageState.texts.NewsBody.by} ` : null}
              {item.author.name}
            </Typography>
            {!hideUserImage ? (
              <Typography variant="caption">{item.author.role}</Typography>
            ) : null}
          </SitoContainer>
        </SitoContainer>
      </Link>
    </Box>
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
