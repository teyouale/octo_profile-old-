import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function InputComponent(props) {
  const [inputValue, setInputValue] = useState("");

  let history = useHistory();

  const handleChange = (event) => {
    setInputValue([event.target.value]);
  };
  const handleSubmission = (event) => {
    props.onchange(inputValue);
  };
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmission();
          history.push(`/${inputValue[0]}`);
        }}
      >
        <Form.Group>
          {/*<Form.Label>Email User Name</Form.Label>*/}
          <Form.Control
            size="lg"
            type="text"
            placeholder="Enter Github User Name"
            onChange={handleChange}
            value={inputValue}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default InputComponent;
