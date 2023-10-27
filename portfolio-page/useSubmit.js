
function wait1(){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                reject("404")
            }, 2000)
        })
}

function wait2(){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                resolve("Hello!")
            }, 2000)
        })
}

function onSuccess(data){
    console.log(data)
}

function onError(errorCode){
    console.log(`ERROR: ${errorCode}`)
}

wait1()
    .then(wait2)
    .then(onSuccess)
    .catch(onError)