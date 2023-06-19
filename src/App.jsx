import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormNote from "./component/FormNote";
import CardNote from "./component/CardNote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Row>
        <Col md="5">
          <FormNote />
        </Col>
        <Col md="7">
          <CardNote />
        </Col>
      </Row>
    </>
  );
}

export default App;
