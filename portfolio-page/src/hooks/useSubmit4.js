const wait = new Promise((resolve, reject) => {
    var random = 0.6;
    if (random > 0,5){
        resolve();
    } else {
        reject();
    }  
});

wait
.then(() => {

})
.catch(() => {
    
})