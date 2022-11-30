import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

const Form = () => {

    const [inputCurrencySymbol, setInputCurrencySymbol] = useState(currencies[0].short);
    const [outputCurrencySymbol, setOutputCurrencySymbol] = useState(currencies[1].short);
    const [currencyValue, setCurrencyValue] = useState("");
    const [result, setResult] = useState("");

    const inputCurrencyRate = currencies.find(({ short }) => short === inputCurrencySymbol).rate;
    const outputCurrencyRate = currencies.find(({ short }) => short === outputCurrencySymbol).rate;

    const onSelectInputChange = ({ target }) => {
        setInputCurrencySymbol(target.value);
    }
    const onSelectOutputChange = ({ target }) => {
        setOutputCurrencySymbol(target.value);
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(calculateResult());
    }
    const swapCurrencies = () => {
        const tmpSymbol = inputCurrencySymbol;
        setInputCurrencySymbol(outputCurrencySymbol);
        setOutputCurrencySymbol(tmpSymbol);
    }
    const calculateResult = () => (        
        {
            currencyValue: currencyValue,
            inputCurrencySymbol: inputCurrencySymbol,
            inputCurrencyRate: inputCurrencyRate,
            outputCurrencySymbol: outputCurrencySymbol,
            outputCurrencyRate: outputCurrencyRate,
            calculateValue: (currencyValue * inputCurrencyRate / outputCurrencyRate).toFixed(2),
        }
    );
    const Result = ({ result }) => (
        (!!result) && (
            <p className="form__paragraph--result">
                {result.currencyValue} {result.inputCurrencySymbol} = <strong>{result.calculateValue} {result.outputCurrencySymbol}</strong>
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
                        onChange={({ target }) => {
                            setCurrencyValue(target.value);
                            //    calculate((target.value * inputCurrencyRate / outputCurrencyRate).toFixed(2));
                        }
                        }
                    />
                </label>
                <label className="form__label">Mam:<br />
                    <select className="form__element" value={inputCurrencySymbol} onChange={onSelectInputChange}>
                        {
                            currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))
                        }
                    </select>
                </label>

                <span
                    className="material-symbols-outlined form__element form__element--currencySwitch"
                    onClick={swapCurrencies}
                >
                    sync_alt
                </span>

                <label className="form__label">Chcę otrzymać:<br />
                    <select className="form__element" value={outputCurrencySymbol} onChange={onSelectOutputChange}>
                        {
                            currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))
                        }
                    </select>
                </label>
                <input type="submit" value="Przelicz" className="form__element form__element--button" />
            </form>
            <Result result={result} />
        </main>
    );
};

export default Form;
