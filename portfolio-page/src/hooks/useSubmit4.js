const wait = new Promise((resolve, reject) => {
    let random = 0.8;
    setTimeout(() => {
        if (random > 0.5){
        resolve(random);
        } else {
        reject(random);
        }   
    }, 2000)
});

wait
.then(() => {
    console.log("Thanks for your submission, we will get back to you shortly!")

})
.catch(() => {
    console.log("Something went wrong, please try again later")
})