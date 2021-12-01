import RegisterForm from "./components/RegisterForm";
import { Heading, Container } from "@chakra-ui/react";

function App() {
  return (
    <Container className="App">
      <Heading as="h1" my="10px" color="blue.500">
        Register Form
      </Heading>
      <RegisterForm />
    </Container>
  );
}

export default App;
