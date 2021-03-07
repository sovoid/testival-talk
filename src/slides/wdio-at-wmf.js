import {
  FlexBox,
  Heading,
  ListItem,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";
import UpgradeWDIOChart from "../charts/upgrade-wdio";

const WDIOAtWMFSlidesFragment = () => {
  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading>Automation Testing at Wikimedia</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Heading fontSize="h2">Background</Heading>
        <UnorderedList>
          <ListItem>
            Mediawiki is a free and open-source Wiki application powering
            Wikipedia, Wiktionary, and Wikimedia commons
          </ListItem>
          <ListItem>
            It uses WebdriverIO as its primary e2e testing framework
          </ListItem>
          <ListItem>
            WebdriverIO v6 was released in late 2020, while v5 was released in
            2018
          </ListItem>
          <ListItem>Most repositories were on the now deprecated v4</ListItem>
          <ListItem>A few of them used v5</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading fontSize="h2">
          Upgrading directly to v6 was challenging:
        </Heading>
        <UnorderedList>
          <ListItem>different npm packages required to configure v5</ListItem>
          <ListItem>lot of breaking changes from v4 to v5</ListItem>
          <ListItem>number of repos used v4</ListItem>
        </UnorderedList>
        <Text>{`Strategic approach was needed to upgrade from v4 -> v5 -> v6`}</Text>
      </Slide>
      <Slide>
        <UpgradeWDIOChart />
      </Slide>
      <Slide>
        <Heading fontSize="h2">The Greens 🟢</Heading>
        <UnorderedList>
          <ListItem>
            Out of total 30 repositories that needed to be upgraded, 24 were
            successfully migrated to v6
          </ListItem>
          <ListItem>
            A lot of skipped tests were identified and potentially removed
          </ListItem>
          <ListItem>
            MediaWiki-Docker is the closest thing we have to the official local
            development environment
          </ListItem>
          <ListItem>
            Created the majority of the documentation on how to use
            MediaWiki-Docker for various extensions
          </ListItem>
          <ListItem>
            Realized a potential need to refactor and clean up existing Selenium
            code
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading fontSize="h2">The Yellows 🟡</Heading>
        <UnorderedList>
          <ListItem>
            Out of total 30 repositories that needed to be upgraded, 4 still
            remain at v5
          </ListItem>
          <ListItem>
            WebdriverIO documentation was lacking in some places
          </ListItem>
        </UnorderedList>
        <Heading fontSize="h2">The Reds 🔴</Heading>
        <UnorderedList>
          <ListItem>
            Out of total 30 repositories that needed to be upgraded, 2 still
            remain at v4
          </ListItem>
          <ListItem>
            Code duplication due to lacking support for environment presets or
            shared configs
          </ListItem>
        </UnorderedList>
      </Slide>
    </>
  );
};

export default WDIOAtWMFSlidesFragment;
