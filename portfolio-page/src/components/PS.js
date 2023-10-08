import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <ul>
            <li
            key={project.title}
            >
            <Box 
              backgroundColor="white"
              borderRadius="lg"
              minH="sm"
              >
              <Image 
                borderRadius="lg"
                src={project.getImageSrc()}></Image>
              <Heading 
                backgroundColor="white" 
                color="black" 
                size="lg">
                  {project.title}  
              </Heading>
              <Text 
                color="grey">
                  {project.description}
              </Text>
              <HStack>
              <Text 
                color="black">
                  See more
              </Text>
              <FontAwesomeIcon 
                color="black" 
                icon={faArrowRight} 
                size="1x">
              </FontAwesomeIcon>
              </HStack>
            </Box>  
            </li>
          </ul>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;