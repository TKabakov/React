import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
    <ul>
            <li
            key={title}
            >
            <Box 
              backgroundColor="white"
              borderRadius="lg"
              minH="sm"
              >
              <Image 
                borderRadius="lg"
                src={imageSrc}></Image>
              <Heading 
                backgroundColor="white" 
                color="black" 
                size="lg"
                margin="2%">
                  {title}  
              </Heading>
              <Text 
                color="blue.600"
                margin="2%">
                  {description}
              </Text>
              <HStack>
              <Text 
                color="black"
                marginLeft="2%"
               >
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
  );
};

export default Card;
