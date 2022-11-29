import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [myDate, refreshTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            refreshTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="clock">
            Dzisiaj jest {myDate.toLocaleDateString(undefined, { month: "long", weekday: "long", day: "numeric" })}, {myDate.toLocaleTimeString()}
        </p>
    );
};

export default Clock;