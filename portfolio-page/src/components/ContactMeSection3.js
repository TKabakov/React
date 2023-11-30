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
import {useAlertContext} from "../context/alertContext";
import Warning from "./Alert";

const ContactMeSection = forwardRef((props, ref) => {
   const {isLoading, response, submit} = useSubmit();
   
   const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: response.type,
    // Message to be displayed, can be any string
    message: response.message1,
  });

//  const {onOpen,type, isOpen } = useAlertContext();
//  const { onOpen, isOpen, type, message, onClose } = useAlertContext();

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
      onOpen: (type, message) => setState({ isOpen: true,  type: response.type, message:response.message1 }),
      onClose: () => setState({ isOpen: false, type: '', message: '' }),
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

  const backgroundColor =() =>{
    if (response.type === 'success') {
    return '#81C784'
  } else if (response.type === 'error'){
    return '#FF8A65'
  } else {
    return '#FEF44C'
  }}

 const {
  isOpen: isVisible,
  onClose,
  onOpen,
} = useDisclosure({ defaultIsOpen: true })

console.log(state);

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
   {/*   {isVisible ? (
    <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <Button onClick={onOpen}>Show Alert</Button>
  )
}    
        <Alert 
            status={response.type} 
            display={display} 
            alignSelf="center" 
            borderRadius={14} 
            w="60%" 
            p="absolute" 
            m="auto"
            backgroundColor={backgroundColor}
            transform="translate(20px, 310px)">
            <AlertIcon />
              <AlertTitle fontSize="lg" paddingTop={2}>
                {response.title}
              </AlertTitle>
              <AlertDescription paddingTop={2}>
                {response.message1}{response.type === 'success' ? formik.values.firstName : ''}{response.message2}
              </AlertDescription>
              <CloseButton
                  alignSelf='flex-start'
                  position='relative'
                  right={-1}
                  top={-1}/>
        </Alert>
*/}
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