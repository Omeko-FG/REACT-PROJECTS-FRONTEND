import Header from "./components/Header";
import Container from "react-bootstrap/Container"
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className="text-center dispaly-4">
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
