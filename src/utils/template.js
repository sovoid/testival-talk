import { Box, FlexBox, FullScreen, Progress } from "spectacle";

// This will be added to all styles
const template = () => {
  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
      <Box padding="1em">
        <Progress />
      </Box>
    </FlexBox>
  );
};

export default template;
