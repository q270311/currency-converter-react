import Container from "./Container";
import Clock from "./Clock";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { currencies } from "./currencies";

const App = () => (
  <div className="App">
    <Container>
      <Clock />
      <Header title="Kalkulator walutowy" />
      <Form />
      <Footer
        value={
          currencies.map((currency => (
            `${currency.short}: ${currency.rate}; `
          )))
        }
      />
    </Container>
  </div>
);

export default App;
