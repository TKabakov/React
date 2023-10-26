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
  CloseButton, 
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const {onOpen, state} = useAlertContext();
  const [display, setDisplay] = useState('none');
  
  const formik = useFormik({
    initialValues: {
      firstName: " ",
      email:" ",
      type: "hireMe",
      comment: " "
    },

   onSubmit: (values) => {
    //  values.preventDefault();
     // alert(JSON.stringify(values, null, 2));
    submit();
    console.log(response.type);
    console.log(response.message);
    setDisplay('')
    
  //  console.log(state);//undefined
     console.log(formik.values.email); //works
     console.log(formik.values); //works
     console.log(isLoading);
     console.log(onOpen)
     //response dosn't work
     //console.log(response.type);'
   },

    validationSchema: 
      Yup.object({
        firstName: Yup.string().required("Required").min(5,"Must be at least 5 characters").max(20,"Must be not more than 20 characters"),
        email: Yup.string().email().required("Required"),
        type:  Yup.string().required("Required"),
        comment: Yup.string().required("Required").min(20,"Must be 20 characters or more"),
    }),
  });

  return (
    <>
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Button onClick={() => setDisplay('')}>
          See Alert
        </Button>
        <Alert status='success' display={display}>
          <AlertIcon />
          <AlertTitle>Ops!</AlertTitle>
          <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
          <CloseButton position="absolute" right='8px' top="8px"/>
        </Alert>
        <Heading as="h1" id="contactme-section">
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
                  height={250}
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
};

export default LandingSection;
