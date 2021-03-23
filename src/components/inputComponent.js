import React, { Component, useState } from "react";
import { Container, Form } from "react-bootstrap";

function InputComponent(props) {
  const [inputValue, setInputValue] = useState("");

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
