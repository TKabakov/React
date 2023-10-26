import {useState} from "react";

function wait1(){
    return new Promise(
        (resolve,rejects) => {
            setTimeout(() => {
                reject("404")
            }, 2000)
        })
}

function wait2(){
    return new Promise(
        (resolve,rejects) => {
            setTimeout(() => {
                resolve("Hello!")
            }, 2000)
        })
}

