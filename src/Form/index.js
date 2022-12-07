import { Fragment, useState } from "react";
import { Shape, Label, Select, Input, CurrencyChang, CurrencyChangeSpan, StyledP } from "./styled";
import { useCurrenciesData } from "./useCurrenciesData";

const Form = () => {
    const currenciesData = useCurrenciesData();

    const [inputCurrencySymbol, setInputCurrencySymbol] = useState(currenciesData.currencies[0].short);
    const [outputCurrencySymbol, setOutputCurrencySymbol] = useState(currenciesData.currencies[1].short);
    const [currencyValue, setCurrencyValue] = useState("");
    const [result, setResult] = useState("");

    const inputCurrencyRate = currenciesData.currencies.find(({ short }) => short === inputCurrencySymbol).rate;
    const outputCurrencyRate = currenciesData.currencies.find(({ short }) => short === outputCurrencySymbol).rate;

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
    const formBody = () => {
        return (
            <Fragment><Shape onSubmit={onFormSubmit}>
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
                            currenciesData.currencies.map((currency => (
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
                            currenciesData.currencies.map((currency => (
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
            </Fragment>
        );
    };

    return (
        <main> 
            {
                currenciesData.status ? formBody() : currenciesData.message                
            }
        </main>
    );
};

export default Form;
