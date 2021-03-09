import {
  Box,
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  Slide,
  UnorderedList,
} from "spectacle";
import UpgradeWDIOChart from "../charts/upgrade-wdio";

const WDIOAtWMFSlidesFragment = () => {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading>Test Automation at Wikimedia</Heading>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/5/56/Wikimedia_Foundation_Logo.png"></Image>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Mediawiki is a free and open-source Wiki application powering
              Wikipedia, Wiktionary, and Wikimedia commons
            </li>
            <li>It uses WebdriverIO as its primary e2e testing framework</li>
            <li>
              WebdriverIO v6 was released in late 2020, while v5 was released in
              2018
            </li>
            <li>Most repositories were on the now deprecated v4</li>
            <li>A few of them used v5</li>
          </ul>
        </Notes>
      </Slide>
      <Slide>
        <Heading fontSize="h2">
          Upgrading directly to v6 was challenging:
        </Heading>
        <FlexBox height="100%">
          <UnorderedList>
            <ListItem>Different Packages</ListItem>
            <ListItem>Breaking Changes</ListItem>
          </UnorderedList>
        </FlexBox>
      </Slide>
      <Slide>
        <UpgradeWDIOChart />
      </Slide>
      <Slide>
        <FlexBox flexDirection="column" height="100%">
          <Box>
            <Heading fontSize="h2">The Greens 🟢</Heading>
          </Box>
          <Box>
            <Heading fontSize="h2">The Yellows 🟡</Heading>
          </Box>
          <Box>
            <Heading fontSize="h2">The Reds 🔴</Heading>
          </Box>
        </FlexBox>
      </Slide>
    </>
  );
};

export default WDIOAtWMFSlidesFragment;
