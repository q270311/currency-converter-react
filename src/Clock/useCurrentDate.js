import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [currentDate, setCurrencyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrencyDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return currentDate;
};