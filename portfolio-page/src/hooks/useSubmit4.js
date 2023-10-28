const wait = new Promise((resolve, reject) => {
    var random = 0.2;
    setTimeout(() => {
        if (random > 0.5){
        resolve(random);
        } else {
        reject(random);
        }   
    }, 2000)
});

wait
.then((random) => {
    console.log(random)

})
.catch((random) => {
    console.log("Error")
})