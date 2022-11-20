export const hoverUnderline = {
  display: "inline-block",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: "black",
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  },
  "&:hover": {
    "&:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
};
