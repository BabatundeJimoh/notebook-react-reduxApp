import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default function CardNote() {
  const state = useSelector((state) => {
    return state.studentReducer;
  });
  console.log(state, "hu");

  return (
    <div>
      {state.students.map((student) => {
        return (
          <>
            {["Secondary"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "18rem" }}
                className="mb-2"
              >
                <Card.Header>
                  <span>Name:{student.name} </span>
                </Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>{student.note}</Card.Text>
                  <Button variant="primary">Edit</Button>{" "}
                  <Button variant="light">Delete</Button>{" "}
                </Card.Body>
              </Card>
            ))}
          </>
        );
      })}
    </div>
  );
}
