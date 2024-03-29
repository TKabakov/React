import {useState} from "react";

const wait = (microseconds) => new Promise((resolve) => setTimeout(resolve, microseconds));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "",
    reset: "",
    title: "",
    message1: "",
    message2:"",
});

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
      setResponse({
        type: 'success',
        reset: true,
        title: 'All is good!',
        message1: `Thanks for your submission `,
        message2: `, we will get back to you shortly!`,
      })}
      else{
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setResponse({
        type: 'error',
        reset: false,
        title: 'Oops!',
        message1: 'Something went wrong',
        message2: ', please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
