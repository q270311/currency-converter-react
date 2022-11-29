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
    const [myDate, refreshDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            refreshDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="clock">
            Dzisiaj jest {formatDate(myDate)}
        </div>
    );
};

export default Clock;