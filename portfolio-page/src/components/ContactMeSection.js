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
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext, AlertProvider} from "../context/alertContext2";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: " ",
      email:" ",
      type: " ",
      comment: " "
    },

    onSubmit: (values) => {
      values.preventDefault();
      submit(values, isLoading, response);
      alert(JSON.stringify(values, null, 2));
      alert(onOpen);
    },

    validationSchema: 
      Yup.object({
        firstName: Yup.string().min(5,"Must be at least 5 characters").max(15,"Must be not more than 15 characters").required("Required"),
        email: Yup.string().email().required("Required"),
        type:  Yup.string().required("Required"),
        comment: Yup.string().min(20,"Must be 20 characters or more").required("Required"),
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
                  <option value="openSource">Open source consultancy sessiongi</option>
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
    </FullScreenSection>
    </>
  );
};

export default LandingSection;
