import React, { useState, forwardRef } from "react";
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
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { faDownLeftAndUpRightToCenter } from "@fortawesome/free-solid-svg-icons";

const ContactMeSection = forwardRef((props, ref) => {
  const {isLoading, response, submit} = useSubmit();

  const [display, setDisplay] = useState('none');

  const [open, setOpen] = useState(false);

  const [data, setData] = useState('');

  console.log("open is", open);
  console.log("isLodaing is", isLoading);
  console.log(response);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email:"",
      type: "",
      comment: ""
    },

   onSubmit: (values) => {
    submit();
    setDisplay(response.message1, response.message2);
    setOpen(true);
    setData(formik.values.firstName);
   },

    validationSchema: 
      Yup.object({
        firstName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        type:  Yup.string(),
        comment: Yup.string().required("Required").min(20,"Must be at least 25 characters"),
    }),
  });

  console.log(data);

  const alertBackgroundColor =() =>{
    if (response.type === 'success') {
    return '#81C784'
  } else if (response.type === 'error'){
    return '#FF8A65'
  } else {
    return '#FEF44C'
  }}

  const Warning = ({ onClose}) => {
    if(isLoading) return null;
    if (!open) return null;
    return(
      <div>
        <Alert 
          status={response.type===""?"warning":response.type}
          display={display} 
          alignSelf="center" 
          borderRadius={14} 
          w="100%" 
          p="absolute" 
          m="auto"
          zIndex={10}
          backgroundColor={alertBackgroundColor}
          transform="translate(20px, 510px)">
          <AlertIcon />
          <AlertTitle fontSize="lg" paddingTop={2}>
            {response.title}
          </AlertTitle>
          <AlertDescription paddingTop={2}>
            {response.message1}{response.type === 'success' ? data : ''}{response.message2}
          </AlertDescription>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </Alert>
      </div>
    );
  };

  return (
    <>
    <FullScreenSection
      isDarkBackground
      backgroundColor={"#512DA8"}
      py={16}
      spacing={8}
      onClick={() => setOpen(false)}
    >
      <Warning 
        open={open}
        onClose={() => {if(response.reset === true) {formik.resetForm(); setOpen(false)} else {setOpen(false)}}}
        onOpen={() => setOpen(true)}
      />

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
