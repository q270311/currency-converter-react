import { useEffect, useState } from "react";
import { currencies } from "../currencies";

export const useCurrencies = () => {
    
    const [currenciesNew, setCurrencies] = useState([
        {
            short: "PLN",
            name: "polski złoty",
            rate: 1.0,
        },
        {
            short: "EUR",
            name: "euro",
            rate: 4.8606,
        },]);

    useEffect(() => {       
        setCurrencies(currencies);
    }, []); 

    return currenciesNew;
};