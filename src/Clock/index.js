
import { useCurrentDate } from "./useCurrentDate";
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
    const date = useCurrentDate();

    return (
        <div className="clock">
            Dzisiaj jest {formatDate(date)}
        </div>
    );
};

export default Clock;