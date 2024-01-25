import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
    const [data, setDeta] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

            .then((res) => res.json())
            .then((res) => setDeta(res[currency]))
        console.log(data);
    }, [currency])
    return data
}
export default UseCurrencyInfo;

// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
// let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`