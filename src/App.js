import { Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const changeValue = (e) => {
    setInputValue([e.target.value]);
  };
  return (
    <Container>
      <Form>
        <Form.Group>
          {/*<Form.Label>Email User Name</Form.Label>*/}
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Github User Name"
            onChange={changeValue}
            value={inputValue}
          />
        </Form.Group>
      </Form>
      {console.log(inputValue)}
    </Container>
  );
}

export default App;
