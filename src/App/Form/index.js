import { useState } from "react";
import { Shape, Label, Select, Input, CurrencyChang, CurrencyChangeSpan, StyledP } from "./styled";


const Form = ({ currencies }) => {
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
            <StyledP>
                {result.currencyValue} {result.inputCurrencySymbol} = <strong>{result.calculateValue} {result.outputCurrencySymbol}</strong>
            </StyledP>
        )

    );

    return (
        <main>
            <Shape onSubmit={onFormSubmit}>
                <Label>Kwota*:<br />
                    <Input
                        type="number" required min="0" step="0.01" placeholder="Wpisz kwotę"
                        value={currencyValue}
                        onChange={({ target }) => {
                            setCurrencyValue(target.value);
                        }}
                    />
                </Label>
                <Label>Mam:<br />
                    <Select value={inputCurrencySymbol} onChange={onSelectInputChange}>
                        {
                            currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.short}
                                </option>
                            )))
                        }
                    </Select>
                </Label>

                <CurrencyChang onClick={swapCurrencies}>
                    <CurrencyChangeSpan > sync_alt </CurrencyChangeSpan>
                </CurrencyChang>

                <Label>Chcę otrzymać:<br />
                    <Select value={outputCurrencySymbol} onChange={onSelectOutputChange}>
                        {
                            currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.short}
                                </option>
                            )))
                        }
                    </Select>
                </Label>
                <Input type="submit" value="Przelicz" />
            </Shape>
            <Result result={result} />
        </main>
    );
};

export default Form;
