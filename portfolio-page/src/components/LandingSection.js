import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar name="Pete" src="https://i.pravatar.cc/150?img=7 "></Avatar>
      <p>{greeting}</p>
      <h2>{bio1}</h2>
      <h2>{bio2}</h2>
  </FullScreenSection>
);

export default LandingSection;
