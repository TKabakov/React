import React, { useState, forwardRef, useContext } from "react";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import Warning from "./Alert";

{/**
You could setState using spread operator at each level like

this.setState(prevState => ({
    ...prevState,
    someProperty: {
        ...prevState.someProperty,
        someOtherProperty: {
            ...prevState.someProperty.someOtherProperty, 
            anotherProperty: {
               ...prevState.someProperty.someOtherProperty.anotherProperty,
               flag: false
            }
        }
    }
}))
*/}

const ContactMeSection = forwardRef((props, ref) => {
   const {isLoading, response, submit} = useSubmit();
   
   const [state, setState] = useState({
    isOpen: false,
    type: response.type,
    message: response.message1,
  });

  console.log(response)
  console.log("type is : ", response.type);
  console.log(state);

  const [display, setDisplay] = useState('none');

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email:"",
      type: "",
      comment: ""
    },

   onSubmit: () => {
    if(response.type === "success"){formik.resetForm()};
    submit();
    setDisplay(response.message1, response.message2);
    setState({
      ...state,
      type: response.type,
      message: response.message1,
      });
   },

    validationSchema: 
      Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        type:  Yup.string(),
        comment: Yup.string().required("Required").min(20,"Must be at least 25 characters"),
    }),
  });

  return (
    <>
    <Warning value={state}/>
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">

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
                  {formik.errors.firstName}
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
                  {formik.errors.email}
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
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button 
                type="submit" 
                colorScheme="purple" 
                width="full"
                isLoading={isLoading}
                loadingText='Submitting'
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
    </>
  );
});

export default ContactMeSection;
