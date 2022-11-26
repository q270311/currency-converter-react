import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const App = () => (
  <div className="App">
    <Container>
      <Header title="Kalkulator walutowy" />
      <Form />
      <Footer value="EUR 4.8606; USD 4.9588; CHF 5.0065; GBP 5.5505" />
    </Container>
  </div>
);

export default App;
