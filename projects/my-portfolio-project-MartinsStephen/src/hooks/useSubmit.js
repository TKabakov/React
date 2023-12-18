import { useState } from "react";
import * as yup from "yup"; // ADDED BY ME

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(100);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;

/**ADDED BY ME */

export const basicSchema = yup.object().shape({
  firstName: yup.string("Please enter a valid email").required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  comment: yup
    .string()
    .min(25, "Must be at least 25 characters")
    .required("Required"),
});
