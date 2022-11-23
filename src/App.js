


function App() {
  return (
    <div className="App">
      <body className="body">
        <div className="body__main">
          <header className="header">
            <h1 className="header__mainTitle">Kalkulator walutowy</h1>
          </header>
          <main>
            <form className="form js-form">
              <label className="form__label">Kwota*:<br />
                <input type="number" name="amountOfMoney" required min="0" step="0.01" placeholder="Wpisz kwotę"
                  className="form__element js-amountOfMoney" />
                </label>
                <label className="form__label">Mam:<br />
                  <select className="form__element js-inputCurrency">
                    <option value="4.8606" selected>EUR</option>
                    <option value="4.9588">USD</option>
                    <option value="5.0065">CHF</option>
                    <option value="5.5505">GBP</option>
                    <option value="1.0">PLN</option>
                  </select>
                </label>

                <span className="material-symbols-outlined form__element form__element--arrows js-switchCurrency">sync_alt</span>

                <label className="form__label">Chcę otrzymać:<br />
                  <select className="form__element js-outputCurrency">
                    <option value="4.8606">EUR</option>
                    <option value="4.9588">USD</option>
                    <option value="5.0065">CHF</option>
                    <option value="5.5505">GBP</option>
                    <option value="1.0" selected>PLN</option>
                  </select>
                </label>
                <input type="submit" value="Przelicz" className="form__element form__element--button js-submit" />
                </form>
                <p className="form__paragraph--result js-result"></p>
                <p className="form__paragraph">EUR 4.8606; USD 4.9588; CHF 5.0065; GBP 5.5505</p>
              </main>
                <footer className="footer">
                  <p className="footer__paragraph">
                    Kalkulator walutowy © Wszystkie prawa zastrzeżone<br />
                      Warszawa 2022
                  </p>
                </footer>
              </div>
            </body>
        </div>
        );
}

        export default App;
