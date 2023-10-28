const wait = new Promise((resolve, reject) => {
    let random = 0.3;
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
    console.log("Hello!")

})
.catch(() => {
    console.log("Error")
})