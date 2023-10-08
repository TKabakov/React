import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
<VStack spacing={8}>
<Image src={require('../images/photo1.jpg')}/>
<Image src={imageSrc}/>
<Text>
    {title}
  </Text>
</VStack>
  return null;
};

export default Card;

/*p
export default function Card({props}){
  return (
    <>
    <VStack 
      spacing={4}
      divider={<StackDivider borderColor="white"/>} 
      align="stretch">
    
      <Heading mb={2} fontSize="4xl" >
        <p>{props}</p>
      </Heading >
        <p>{props}</p>
        <p>{props}</p>
      <HStack spacing={12}>
        <p>{props}</p>
        <p>{props}</p>
        <Text as="i" fontSize="3xl" noOfLines={3} color="tomato">
          <Text as="b">
             <p>{props}</p> 
          </Text>
        <p>{props}</p>          
        <p>{props}</p>          
        <p>{props}</p>
        </Text>


      </HStack>
    </VStack>
    </>
  )
};
*/