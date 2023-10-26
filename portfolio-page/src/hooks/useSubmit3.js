import {useState} from "react";

function wait(){
    return new Promise(
        (resolve,rejects) => {
            setTimeout(() => {
                reject("404")
            }, 2000)
        }
    )
}