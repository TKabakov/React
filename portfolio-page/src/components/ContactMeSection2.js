import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
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
import {useAlertContext} from "../context/alertContext";


const LandingSection = () => {
//  const {isLoading, response, submit} = useSubmit();
//  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: " ",
      email:" ",
      type: " ",
      comment: " ",
    },

    onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
    },

    validationSchema: 
      Yup.object({
        firstName: Yup.string()
        .max(15, "Must be 15 characters or less").
        required("Required"),
        email: Yup.string().
        email("Invalid email address").required("Required"),
        type: Yup.string().required("Required"),
        comment: Yup.string().required("Required"),
    }),
  });

  return (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                    ) : null}

                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                    ) : null}
                <label htmlFor="type">Type of enquiry</label>
                <select 
                  id="type" 
                  name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                  >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </select>
             
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>
                Comment Required
                </FormErrorMessage>

              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
