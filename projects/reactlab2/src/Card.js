import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
  
      //<Image src={imageSrc}/>
      //<Heading>{title}</Heading>
      //<Text>{description}</Text>
      <VStack
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      color="black"
      spacing={2}
    >
      <Image src={imageSrc} alt={title} />
      <VStack p={4} spacing={2} align="start">
        <Heading as="h3" fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack
        justify="space-between"
        p={4}
        borderTop="1px"
        borderColor="gray.200"
        w="100%"
      >
        <Text fontSize="md">See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};



   
 
export default Card;
