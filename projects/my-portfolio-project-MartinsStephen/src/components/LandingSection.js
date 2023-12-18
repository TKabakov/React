import React from "react";
import { Heading, VStack, HStack, Text, Highlight } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/coding-avatar.png";

const greeting = "Hello, John Doe here!";
const bio1 = "Wannabe Front-end Developer";
const bio2 = "AAA Certified Problem Solver";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.

const LandingSection = () => (
  <FullScreenSection
    id="landing-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <img
        src={avatar}
        alt="Image of John Doe"
        width="250px"
        style={{
          borderRadius: "50%",
          // borderColor: "black",
          // borderWidth: "5px",
          // borderStyle: "solid", // Add this line to make the border visible
        }}
      />

      {/* <Avatar src="{avatar}" name="John Doe" size="2xl" /> */}
      <Text fontSize="lg">{greeting}</Text>
      <Heading>{bio1}</Heading>
      {/* <Heading>{bio2}</Heading> */}
      <Text>
        <Highlight
          query={[
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "React",
            "Problem-solving",
            "Adobe Illustator",
            "Figma",
          ]}
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            bg: "black",
            color: "white",
          }}
        >
          HTML CSS JavaScript Git React Problem-solving Adobe Illustator Figma
        </Highlight>
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
