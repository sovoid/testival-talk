import { Box, FlexBox, Grid, Heading, Image, Slide, Text } from "spectacle";

const Speaker = ({ avatar, name, bio, github, twitter }) => {
  return (
    <Box>
      <Heading fontSize="h2">{name}</Heading>
      <FlexBox width="100%" justifyContent="center">
        <Image src={avatar} width="200px" />
      </FlexBox>
      <Text>{bio}</Text>
      <Text>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "5px",
          }}
        >
          <Image
            src={`https://img.shields.io/github/followers/${github}?style=social`}
          />
        </a>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "5px",
          }}
        >
          <Image
            src={`https://img.shields.io/twitter/follow/${twitter}?style=social`}
          />
        </a>
      </Text>
    </Box>
  );
};

const SpeakerSlidesFragment = () => (
  <Slide>
    <Grid gridTemplateColumns="2fr 2fr" height="100%">
      <Speaker
        name="Vidhi Mody"
        avatar="https://media-exp1.licdn.com/dms/image/C5603AQFQRXzD9uTN-w/profile-displayphoto-shrink_800_800/0/1591630602389?e=1620864000&v=beta&t=7KWNvClb3vP396xIbZbrtVqIEl1IUmnBp0o14BLkQP4"
        bio="Google Summer of Code 2020 at Wikimedia, currently a Volunteer"
        mail="vidhimody6@gmail.com"
        github="vidhi-mody"
        twitter="vidhi_mody"
      />
      <Speaker
        name="Soham Parekh"
        bio="Google Summer of Code 2020 at Wikimedia, currently a Volunteer"
        mail="mail@sohamp.dev"
        github="und3fined-v01d"
        avatar="https://media-exp1.licdn.com/dms/image/C5103AQHVt45EgXfiRw/profile-displayphoto-shrink_800_800/0/1582886660877?e=1620864000&v=beta&t=unEr-MET_AbrBLhVQG2dEsWDvPtvqqjvHWVECNvY1kI"
        twitter="und3fined_v01d"
      />
    </Grid>
  </Slide>
);

export default SpeakerSlidesFragment;
