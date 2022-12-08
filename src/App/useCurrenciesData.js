import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrenciesData = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [dateOfRates, setDateOfRates] = useState("");
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        (async () => {
            let data = "";
            setMessage("Trwa ładowanie danych...");
            try {
                const response = await axios.get("https://api.exchangerate.host/lates?base=PLN");
                data = response.data;
            } catch (error) {
                setMessage("Brak komunikacji z serwerem. Sprawdź czy masz aktywne połączenie z Internetem.");
                setStatus(false);
            }
            setDateOfRates(data["date"]);
            const rates = data["rates"];
            setCurrency(
                Object.keys(rates).map(k => (
                    {
                        short: k,
                        rate: rates[k],
                    }
                )));
            setMessage("Pobieranie danych zakończone powodzeniem. Trwa ładowanie aplikacji...");
            setStatus(true);
        })();
    }, []);

    return {
        message: message,
        status: status,
        dateOfRates: dateOfRates,
        currencies: currency,
    }
};