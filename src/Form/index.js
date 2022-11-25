import { useState } from "react";
import "./style.css";

const Form = () => {
    const [inputCurrencyRate, setInputCurrencyRate] = useState("4.8606");
    const [inputCurrencySymbol, setInputCurrencySymbol] = useState("EUR");
    const [outputCurrencyRate, setOutputCurrencyRate] = useState("4.8606");
    const [outputCurrencySymbol, setOutputCurrencySymbol] = useState("EUR");
    const [currencyValue, setCurrencyValue] = useState("");
    const [calculation, calculate] = useState("");

    const onSelectInputChange = ({ target }) => {
        setInputCurrencyRate(target.value);
        setInputCurrencySymbol(target.options[target.selectedIndex].text);
        calculate("");
    }
    const onSelectOutputChange = ({ target }) => {
        setOutputCurrencyRate(target.value);
        setOutputCurrencySymbol(target.options[target.selectedIndex].text);
        calculate("");
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate((currencyValue * inputCurrencyRate / outputCurrencyRate).toFixed(2));
    }
    const swapCurrencies = () => {
        const tmpRate = inputCurrencyRate;
        setInputCurrencyRate(outputCurrencyRate);
        setOutputCurrencyRate(tmpRate);
        const tmpSymbol = inputCurrencySymbol;
        setInputCurrencySymbol(outputCurrencySymbol);
        setOutputCurrencySymbol(tmpSymbol);
        calculate("");
    }
    const Result = () => (
        currencyValue !== "" && (
            <p className="form__paragraph--result">
                {currencyValue} {inputCurrencySymbol} = <strong>{calculation} {outputCurrencySymbol}</strong>
            </p>
        )
    );

    return (
        <main>
            <form className="form" onSubmit={onFormSubmit}>
                <label className="form__label">Kwota*:<br />
                    <input
                        type="number" required min="0" step="0.01" placeholder="Wpisz kwotę"
                        className="form__element"
                        value={currencyValue}
                        onChange={(event) => setCurrencyValue(event.target.value)}
                    />
                </label>
                <label className="form__label">Mam:<br />
                    <select className="form__element" value={inputCurrencyRate} onChange={onSelectInputChange}>
                        <option value="4.8606">EUR</option>
                        <option value="4.9588">USD</option>
                        <option value="5.0065">CHF</option>
                        <option value="5.5505">GBP</option>
                        <option value="1.0">PLN</option>
                    </select>
                </label>

                <span
                    className="material-symbols-outlined form__element form__element--currencySwitch"
                    onClick={swapCurrencies}
                >
                    sync_alt
                </span>

                <label className="form__label">Chcę otrzymać:<br />
                    <select className="form__element" value={outputCurrencyRate} onChange={onSelectOutputChange}>
                        <option value="4.8606">EUR</option>
                        <option value="4.9588">USD</option>
                        <option value="5.0065">CHF</option>
                        <option value="5.5505">GBP</option>
                        <option value="1.0">PLN</option>
                    </select>
                </label>
                <input type="submit" value="Przelicz" className="form__element form__element--button" />
            </form>
            <Result />
        </main>
    );
};

export default Form;
