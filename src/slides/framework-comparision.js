import React from "react";
import {
  Box,
  Grid,
  FlexBox,
  Heading,
  ListItem,
  Slide,
  UnorderedList,
  OrderedList,
  Text,
} from "spectacle";
import Iframe from "react-iframe";
import ComparisionLineChart from "../charts/comparision";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const FrameworkComparisionSlidesFragment = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Slide>
        <FlexBox height="100%">
          <Heading>WebdriverIO vs Puppeteer vs Cypress</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h2">What's trending?</Heading>
          <Iframe
            url="https://www.npmtrends.com/cypress-vs-puppeteer-vs-webdriverio-vs-playwright-vs-nightwatch"
            width="75%"
            height="75%"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <Grid gridTemplateColumns="1fr 1fr">
          <Box>
            <Heading fontSize="h2">WebdriverIO</Heading>
            <UnorderedList>
              <ListItem>Extensible</ListItem>
              <ListItem>Compatible</ListItem>
              <ListItem>Feature Rich</ListItem>
              <ListItem>Works out of box</ListItem>
              <ListItem>Applitools support</ListItem>
              <ListItem>Device Emulation</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading fontSize="h2">Puppeteer</Heading>
            <UnorderedList>
              <ListItem>Selenium free</ListItem>
              <ListItem>Relevant</ListItem>
              <ListItem>Promise based</ListItem>
              <ListItem>Fast</ListItem>
              <ListItem>Parallelism</ListItem>
              <ListItem>Device Emulation</ListItem>
            </UnorderedList>
          </Box>
        </Grid>
      </Slide>
      <Slide>
        <Heading fontSize="h2">Issues with Cypress</Heading>
        <UnorderedList>
          <ListItem>
            Looked{" "}
            <a
              href="https://www.sohamp.dev/blog/2020-06-29-fanboying-cypress/"
              target="_blank"
              rel="noreferrer"
            >
              very promising
            </a>{" "}
            at first
          </ListItem>
          <ListItem>Short-lived</ListItem>
          <ListItem>Cookie 🍪</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading fontSize="h2">Experimental Evaluation</Heading>
        <Grid gridTemplateColumns="1fr 1fr">
          <Box>
            <Heading fontSize="h3">Requirements</Heading>
            <OrderedList>
              <ListItem>Two machines with identical RAM, OS</ListItem>
              <ListItem>Completely airgapped</ListItem>
            </OrderedList>
          </Box>
          <Box>
            <Heading fontSize="h3">Method</Heading>
            <OrderedList>
              <ListItem>Setup mediawiki/core repo</ListItem>
              <ListItem>Install dependencies</ListItem>
              <ListItem>Run tests</ListItem>
              <ListItem>Teardown the environment</ListItem>
              <ListItem>Repeat steps 1-3 for 15 times</ListItem>
            </OrderedList>
          </Box>
        </Grid>
      </Slide>
      <Slide>
        <Heading fontSize="h2">Evaluation Outcome</Heading>
        <ComparisionLineChart />
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h2">Evaluation Outcome</Heading>
          <Iframe
            id="evaluation"
            url="https://www.sohamp.dev/blog/2020-08-24-wmf-gsoc2020/"
            width="75%"
            height="75%"
          />
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading fontSize="h2">Conclusion</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading>So which one should you use?</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Text>
            <a
              href="https://www.vidhimody.me/blog/2020-08-26-gsocpedia-final-chapter/"
              target="_blank"
              rel="noreferrer"
            >
              Vidhi's Blog Post
            </a>
          </Text>
          <Text>
            <a
              href="https://www.sohamp.dev/blog/2020-08-24-wmf-gsoc2020/"
              target="_blank"
              rel="noreferrer"
            >
              Soham's Blog Post
            </a>
          </Text>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Heading>The End</Heading>
        </FlexBox>
        <Confetti width={width} height={height} />
      </Slide>
    </>
  );
};

export default FrameworkComparisionSlidesFragment;
