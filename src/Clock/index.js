import { useEffect, useState } from "react";
import "./style.css";

const formatDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long"
});

const Clock = () => {
    const [currencyDate, setCurrencyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrencyDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">
            Dzisiaj jest {formatDate(currencyDate)}
        </div>
    );
};

export default Clock;