
const useSubmit = () => {

    const [isLoading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const wait = new Promise((resolve, reject) => {
    
        let message = ""
        
        let random = Math.random();
        
        setLoading (true);

        setTimeout(() => {
            if (random > 0.5){
            resolve(random, message);
            } else {
            reject(random, message);
            }   
        }, 2000)
    });
    
    wait
    .then((message) => {
        setResponse({
            type: 'success',
            message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,    
        })
        
        console.log(message)
    })
    .catch(() => {
        message = "Something went wrong, please try again later";
        console.log(message)
    })
    .finally(() => {
        console.log("All done");
    })
    

}

