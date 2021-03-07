import React from "react";
import ReactDOM from "react-dom";
import { Deck } from "spectacle";

import {
  FrameworkComparisionSlides,
  IntroSlides,
  SpeakerSlides,
  WDIOAtWMFSlides,
} from "./slides";
import template from "./utils/template";
import theme from "./utils/theme";

const App = () => (
  <Deck theme={theme} template={template}>
    <IntroSlides />
    <SpeakerSlides />
    <WDIOAtWMFSlides />
    <FrameworkComparisionSlides />
  </Deck>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
