const wait = new Promise((resolve, reject) => {
    var random = 0.6;
    if (random > 0.5){
        resolve(random);
    } else {
        reject(random);
    }  
});

wait
.then((random) => {
    console.log(random)

})
.catch((random) => {
    console.log("Error")
})