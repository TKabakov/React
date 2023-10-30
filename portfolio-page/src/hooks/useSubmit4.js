

const wait = new Promise((resolve, reject) => {
    let message = "";
    let random = Math.random();
    setTimeout(() => {
        if (random > 0.5){
        resolve(message);
        } else {
        reject(message);
        }   
    }, 2000)
});

wait
.then((message) => {
    message = "Thanks for your submission, we will get back to you shortly!";
    console.log(message)
})
.catch(() => {
    message = "Something went wrong, please try again later";
    console.log(message)
})
.finally(() => {
    console.log("All done");
})
