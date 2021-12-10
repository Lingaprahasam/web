import "../src/App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Container fluid>
        <Header />
        <Footer />
      </Container>
    </>
  );
};
export default App;
