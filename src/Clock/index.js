
import { useCurrentDate } from "./useCurrentDate";
import {Time} from "./styled";

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
        <Time>
            Dzisiaj jest {formatDate(date)}
        </Time>
    );
};

export default Clock;