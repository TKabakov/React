import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import {forwardRef} from 'react';

const LandingSection = forwardRef((props, ref) => {
  const {isLoading, response, submit} = useSubmit();
  const {onOpen } = useAlertContext();
  const [display, setDisplay] = useState('none');
  
  const formik = useFormik({
    initialValues: {
      firstName: "Pepe Jeans",
      email:"a@g",
      type: "hireMe",
      comment: "I'm a softweare engeneergit"
    },

   onSubmit: (values) => {
    submit();
      setDisplay(response.message);    //might need an update
   },

    validationSchema: 
      Yup.object({
        firstName: Yup.string().required("Required").min(5,"Must be at least 5 characters").max(20,"Must be not more than 20 characters"),
        email: Yup.string().email().required("Required"),
        type:  Yup.string().required("Required"),
        comment: Yup.string().required("Required").min(20,"Must be 20 characters or more"),
    }),
  });

  const backgroundColor =() =>{
    if (response.type === 'success') {
    return '#81C784'
  } else if (response.type === 'error'){
    return '#FF8A65'
  } else {
    return '#FEF44C'
  }
  } 

  return (
    <>
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">    
          <Alert 
            status={response.type} 
            display={display} 
            alignSelf="center" 
            borderRadius={14} 
            w="60%" 
            p="absolute" 
            m="auto"
            backgroundColor={backgroundColor}
            transform="translate(0px, 105px)"
            >
          <AlertIcon />
          <AlertTitle fontSize="lg" paddingTop={2}>
            {response.title}
          </AlertTitle>
          <AlertDescription paddingTop={2}>
            {response.message}
          </AlertDescription>
        </Alert>
        
        <Heading ref={ref} as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl 
                isInvalid={formik.touched.firstName && formik.errors.firstName}
                  >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>
                  Text is required. {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>
                Email is required. The {formik.errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  {...formik.getFieldProps('type')}
                  >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy sessionly</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={50} //Need an update to 250
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>
                Comment is required. {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      <Stack spacing={3}>
</Stack>
alert(formik.values.email);
    </FullScreenSection>
    </>
  );
});

export default LandingSection;
