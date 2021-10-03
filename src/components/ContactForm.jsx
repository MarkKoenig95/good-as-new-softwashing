import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function Input(props) {
  const {
    id,
    invalidInputFeedback,
    label,
    placeholder,
    setValue,
    type,
    value,
    width,
  } = props;

  const _handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Form.Group as={Col} md={width} controlId={id}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control
          onChange={_handleValueChange}
          value={value}
          type={type}
          placeholder={placeholder}
          required
        />
        <Form.Control.Feedback type="invalid">
          {invalidInputFeedback}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

export default function ContactForm() {
  const myEmail = "Ethan@GANsoftwashing.com";
  const subject = "Request for quote";
  const [body, setBody] = useState("");

  const [validated, setValidated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userStories, setUserStories] = useState(null);
  const [userSquareFeet, setUserSquareFeet] = useState(null);
  const [userServices, setUserServices] = useState("");

  const _handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`);
    }

    setValidated(true);
  };

  const _handleServicesChange = ({ target }) => {
    setUserServices(target.value);
  };

  useEffect(() => {
    let tempServices = userServices.split("\n");
    let br = "%0D%0A";
    let bodyArray = [];

    bodyArray.push("Hello,");

    bodyArray.push("");

    bodyArray.push(
      `My name is ${userName}, I am interested in getting a quote from your company.`
    );

    bodyArray.push("");

    let plural = userStories == 1 ? "y" : "ies";

    bodyArray.push(
      `My home is ${userStories} stor${plural} and ${userSquareFeet} square feet`
    );

    bodyArray.push("");

    bodyArray.push(`I am interested in these services:`);

    tempServices.forEach((service) => {
      bodyArray.push(service);
    });

    bodyArray.push("");

    bodyArray.push(`Please contact me using my email: ${userEmail}`);

    let tempBody = bodyArray.join(br);

    setBody(tempBody);
  }, [userEmail, userName, userServices, userSquareFeet, userStories]);

  return (
    <Form
      className="bg-light p-5 rounded"
      noValidate
      validated={validated}
      onSubmit={_handleSubmit}
    >
      <h3 className="mb-5">Request a quote</h3>
      <Row className="mb-3">
        <h5>Personal Information</h5>
      </Row>
      <Row className="mb-3">
        <Input
          id={"validationName"}
          invalidInputFeedback="Please provide a name we can contact."
          label="Name"
          placeholder="Name"
          setValue={setUserName}
          type="text"
          value={userName}
          width={6}
        />
        <Input
          id={"validationEmail"}
          invalidInputFeedback="Please provide a valid email address."
          label="Email"
          placeholder="Email"
          setValue={setUserEmail}
          type="email"
          value={userEmail}
          width={6}
        />
      </Row>
      <Row className="mb-3">
        <h5>Home Information</h5>
      </Row>
      <Row className="mb-3">
        <Input
          id={"validationStories"}
          invalidInputFeedback="Please provide the number of floors in your house."
          label="Stories"
          placeholder="1"
          setValue={setUserStories}
          type="number"
          value={userStories}
          width={2}
        />
        <Input
          id={"validationSquareFeet"}
          invalidInputFeedback="Please provide the approximate square footage of your house."
          label="Square Feet"
          placeholder="2500"
          setValue={setUserSquareFeet}
          type="number"
          value={userSquareFeet}
          width={3}
        />
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md={12} controlId="validationServices">
          <h5>Services</h5>
          <Form.Control
            as="textarea"
            onChange={_handleServicesChange}
            placeholder="Please list all of the services you are interested in"
            value={userServices}
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit request</Button>
    </Form>
  );
}
