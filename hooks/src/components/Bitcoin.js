import { useState, useEffect } from "react";

export default function Bitcoin(){
    const[btcData, setBtcData] = useState({});

    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((response) => response.json())
            .then((jsonData) => setBtcData(jsonData.bpi.USD))
            .catch((error) => console.log(error));
    }, []);
}