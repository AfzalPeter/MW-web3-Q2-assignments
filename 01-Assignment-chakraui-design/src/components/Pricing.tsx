import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  StackProps,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing='5' {...rest} alignItems='start'>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={['left','left','center']} > {children} </Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx='6'>
    <Box
    as='section' 
    maxW='994px' 
    margin='auto' 
    mt='-64' 
    borderRadius='xl' 
    overflow='hidden' 
    boxShadow='0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.0.04)' >
    
      <Flex direction={['column','column','row']} >
        <Box bg="#F0EAFB" p="60px">
          <Text fontSize='2xl' fontWeight='extrabold'>
            Primium PRO
          </Text>
          <Heading as="h3" fontSize={['5xl', '5xl', '6xl']} mt='4'>
            $329
          </Heading>
          <Text color="#171923" fontSize='lg' fontWeight='medium' mt='2'>
            billed just once
          </Text>
          <Button colorScheme="purple" size="lg" w="282px" mt="24px">
            Get Started
          </Button>
        </Box>

        <Box p='60px' fontSize='18px' bg='white' >
          <Text textAlign='left' >
            Access these features when you get this pricing package for
            business.
          </Text>
          <Stack as="ul" spacing='20px' pt='24px' >
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Aditional phone numbers </ListItem>
            <ListItem>Automated message via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
    </Box>
  );
}
