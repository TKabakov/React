import {useState} from "react";

const wait = (microseconds) => new Promise((resolve) => setTimeout(resolve, microseconds));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState({
    type: "warning",
    title: "",
    message: "Your submission is loading",
});

  const submit = async (url, data) => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
      setResponse({
        type: 'success',
        title: 'All is good!',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })}
      else{
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setResponse({
        type: 'error',
        title: 'Oops!',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
