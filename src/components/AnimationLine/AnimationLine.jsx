import PropTypes from "prop-types";

// @mui/material
import { Divider } from "@mui/material";

const AnimationLine = (props) => {
  const { active, sx } = props;

  return (
    <Divider
      sx={{
        width: active ? "100%" : 0,
        opacity: active ? 1 : 0,
        transition: "all 500ms ease",
        border: "1px solid",
        ...sx,
      }}
    />
  );
};

AnimationLine.defaultProps = {
  sx: {},
};

AnimationLine.propTypes = {
  active: PropTypes.bool,
  sx: PropTypes.object,
};

export default AnimationLine;
