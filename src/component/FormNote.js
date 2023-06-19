import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addStudent } from "./redux/NoteSlice";

const FormNote = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      id: uuid(),
      name: name,
      note: note,
    };
    console.log(newStudent);
    // Use the newUser object as needed, such as dispatching an action to update the state
    dispatch(addStudent(newStudent));
    setName("");
    setNote("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "note") {
      setNote(value);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Note:</Form.Label>
          <Form.Control
            style={{
              height: "200px",
              paddingTop: "10px",
              marginLeft: "10px;",
            }}
            type="note"
            placeholder="Enter note"
            name="note"
            value={note}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormNote;
