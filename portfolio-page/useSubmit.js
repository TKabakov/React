
function wait1(){
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                resolve("404")
            }, 2000)
        })
}

function wait2(){
    console.log('wait2');
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => {
                resolve("Hello!")
            }, 1000)
        })
}

function onSuccess(data){
    console.log(`Success: ${data}`)
}

function onError(errorCode){
    console.log(`ERROR: ${errorCode}`)
}

function onFinally(){
    console.log('Finally we be done yo!')
}
wait1()
    .then(wait2, onError)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)