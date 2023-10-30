import {useState} from "react";

const wait = new Promise((resolve, reject) => {
    let random = Math.random();
    setTimeout(() => {
        if (random > 0.5){
        resolve();
        } else {
        reject();
        }   
    }, 2000)
});

const useSubmit = () => {

    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState({
        type: "", 
        message: "",
    });

    setLoading (true);

    wait
    .then((response) => {
        setResponse({
            type: 'success',
            message: `Thanks for your submission, we will get back to you shortly!`,    
        })
        console.log(response.message)
    })
    .catch((response) => {
        setResponse({
            type: 'error',
            message: 'Something went wrong, please try again later!',
        })
        console.log(response.message)
    })
    .finally((isLoading) => {
        setLoading(false);
    })
    
    return(
        {response, isLoading}
    )
}

export default useSubmit;
