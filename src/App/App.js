import Container from "./Container";
import Clock from "./Clock";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { useCurrenciesData } from "./useCurrenciesData";

const App = () => {
  const currenciesData = useCurrenciesData();

  return (
    <div className="App">
      <Container>
        <Clock />
        <Header title="Kalkulator walutowy" />
        {
          currenciesData.status ? 
            <>
              <Form currencies={currenciesData.currencies} /> 
              <Footer value={currenciesData.dateOfRates} />
            </>
            : currenciesData.message
        }        
      </Container>
    </div>
  );
}


export default App;
