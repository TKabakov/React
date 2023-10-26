
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

function onSuccess(date){
    console.log(data)
}

function onerror(errorCode){
    console.log('ERROR: ${errorCode}')
}

wait1()