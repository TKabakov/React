import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

/*
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

<VStack>
  <Image
    borderRadius="sm"
    boxSize="150px"
    src={imageSrc}
    />
    <Heading>{title}</Heading>
    <Text fontSize="md">{description}</Text>
</VStack>
  return null;
};

export default Card;
*/
export default function Card({props}){
  return (
    <VStack spacing={4}>
      <Heading>
        <p>{props}</p>
      </Heading>
        <p>{props}</p>
        <p>{props}</p>
      <HStack spacing={12}>
        <p>{props}</p>
        <p>{props}</p>
        <Text fontSize="3xl" noOfLines={2}>
        <p>{props}</p>          
        <p>{props}</p>          
        <p>{props}</p>
        </Text>


      </HStack>
    </VStack>

  )
};