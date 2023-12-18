import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  console.log(title, description);
  return (
    <VStack
      borderWidth="1px"
      borderRadius={40}
      overflow="hidden"
      bg="white"
      maxW="lg"
      spacing={4}
      p={4}
    >
      <Image
        src={imageSrc}
        alt={title}
        maxW="lg"
        objectFit="cover"
        borderRadius={40}
        p={4}
        pt={0}
      />
      <Box>
        <Text fontSize="2xl" color="black">
          {title}
        </Text>
        <Text fontSize="md" color="black">
          {description}
        </Text>
        <HStack>
          <Text color="black" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
