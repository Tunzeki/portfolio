import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <>
      <HStack>
        <VStack>
          <Box bg="white" borderRadius="1%">
            <Image src={imageSrc} alt="Testing" borderRadius="1%"/>
            <Heading as="h3" size="md" color="black" marginTop="10px" marginLeft="10px">{title}</Heading>
            <Text fontSize="sm" color="gray" marginTop="10px" marginLeft="10px">{description}</Text>
            <Text fontSize="sm" color="black" margin="10px 0 10px 10px">
              See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </Text>
          </Box>
        </VStack>        
      </HStack> 
    </>
  );
};

export default Card;
