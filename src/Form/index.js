// import { useState } from "react";
import "./style.css";

const Form = () => {
    /* const [newTaskContent, setNewTaskContent] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    } */
    return (
        <main>
            <form className="form">
                <label className="form__label">Kwota*:<br />
                    <input type="number" name="amountOfMoney" required min="0" step="0.01" placeholder="Wpisz kwotę"
                        className="form__element" />
                </label>
                <label className="form__label">Mam:<br />
                    <select className="form__element">
                        <option value="4.8606" selected>EUR</option>
                        <option value="4.9588">USD</option>
                        <option value="5.0065">CHF</option>
                        <option value="5.5505">GBP</option>
                        <option value="1.0">PLN</option>
                    </select>
                </label>

                <span className="material-symbols-outlined form__element form__element--currencySwitch">sync_alt</span>

                <label className="form__label">Chcę otrzymać:<br />
                    <select className="form__element">
                        <option value="4.8606">EUR</option>
                        <option value="4.9588">USD</option>
                        <option value="5.0065">CHF</option>
                        <option value="5.5505">GBP</option>
                        <option value="1.0" selected>PLN</option>
                    </select>
                </label>
                <input type="button" value="Przelicz" className="form__element form__element--button" />
            </form>
            <p className="form__paragraph--result"></p>
        </main>
    );
};

export default Form;
