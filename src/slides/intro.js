import { Box, FlexBox, Heading, Image, Slide } from "spectacle";

import cypressLogo from "../assets/cypress.png";
import jestPuppeteerLogo from "../assets/jest-puppeteer.png";
import wdioLogo from "../assets/webdriver-io.png";

const ImageBox = ({ src }) => (
  <Box margin="20px">
    <Image src={src} width="200px" />
  </Box>
);

const IntroSlidesFragment = () => (
  <>
    <Slide>
      <Heading fontSize="h1">State of automated testing in Javascript</Heading>
      <FlexBox justifyContent="center" alignItems="center">
        <ImageBox src={cypressLogo} />
        <ImageBox src={jestPuppeteerLogo} />
        <ImageBox src={wdioLogo} />
      </FlexBox>
    </Slide>
  </>
);

export default IntroSlidesFragment;
