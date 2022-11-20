// sito components
import SitoContainer from "sito-container";

// locals
import { old } from "../../../data/data";

// components
import NewsBody from "../../../components/NewsBody/NewsBody";
import InViewComponent from "../../../components/InViewComponent/InViewComponent";

const Old = () => {
  return (
    <SitoContainer flexDirection="column">
      {old.map((item, i) => (
        <InViewComponent delay={`0.${i + 2}s`} key={item.id}>
          <SitoContainer flexDirection="column" sx={{ marginBottom: "40px" }}>
            <NewsBody item={{ ...item }} hasImage hideUserImage fullLink />
          </SitoContainer>
        </InViewComponent>
      ))}
    </SitoContainer>
  );
};

export default Old;
