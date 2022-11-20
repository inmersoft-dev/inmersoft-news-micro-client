// @mui/material
import { Box } from "@mui/material";

// locals
import { old } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

const Old = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: "20px", md: "0" },
        order: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row", lg: "column" },
        gap: "20px",
      }}
    >
      {old.map((item, i) => (
        <InViewComponent
          delay={`0.${i + 2}s`}
          key={item.id}
          sx={{
            marginBottom: { xs: "20px", md: "40px" },
            width: { xs: "100%", md: "50%", lg: "100%" },
          }}
        >
          <NewsBody item={{ ...item }} hasImage hideUserImage fullLink />
        </InViewComponent>
      ))}
    </Box>
  );
};

export default Old;
