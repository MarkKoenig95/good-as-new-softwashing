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
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userStories, setUserStories] = useState("");
  const [userSquareFeet, setUserSquareFeet] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userZip, setUserZip] = useState("");
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

    // eslint-disable-next-line eqeqeq
    let plural = userStories == 1 ? "y" : "ies";

    bodyArray.push(
      `My home is ${userStories} stor${plural} and ${userSquareFeet} square feet`
    );

    bodyArray.push("");

    bodyArray.push(
      `My address is ${userAddress}, ${userCity}, ${userState} ${userZip}`
    );

    bodyArray.push("");

    bodyArray.push(`I am interested in these services:`);

    tempServices.forEach((service) => {
      bodyArray.push(service);
    });

    bodyArray.push("");

    bodyArray.push(`Please contact me using my email: ${userEmail}`);

    bodyArray.push("");

    bodyArray.push(`Or my phone number: ${userPhone}`);

    let tempBody = bodyArray.join(br);

    setBody(tempBody);
  }, [
    userAddress,
    userCity,
    userEmail,
    userName,
    userPhone,
    userServices,
    userSquareFeet,
    userState,
    userStories,
    userZip,
  ]);

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
          setValue={setUserName}
          type="text"
          value={userName}
          width={4}
        />
        <Input
          id={"validationEmail"}
          invalidInputFeedback="Please provide a valid email address."
          label="Email"
          placeholder="user@example.com"
          setValue={setUserEmail}
          type="email"
          value={userEmail}
          width={4}
        />
        <Input
          id={"validationPhone"}
          invalidInputFeedback="Please provide a valid phone number."
          label="Phone Number"
          placeholder="123-456-7890"
          setValue={setUserPhone}
          type="tel"
          value={userPhone}
          width={4}
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
        <h5>Home Address</h5>
      </Row>
      <Row className="mb-3">
        <Input
          id="contactAddress"
          invalidInputFeedback="Please provide an address for our records."
          label="Address"
          placeholder="ex. 123 Main Street"
          setValue={setUserAddress}
          type="text"
          value={userAddress}
          width={12}
        />
      </Row>

      <Row className="mb-3">
        <Input
          id="contactCity"
          invalidInputFeedback="Please provide a city for our records."
          label="City"
          setValue={setUserCity}
          type="text"
          value={userCity}
          width={4}
        />
        <Input
          id="contactState"
          invalidInputFeedback="Please provide a state for our records."
          label="State"
          setValue={setUserState}
          type="text"
          value={userState}
          width={4}
        />
        <Input
          id="contactZip"
          invalidInputFeedback="Please provide a zip for our records."
          label="Zip / Postal Code"
          setValue={setUserZip}
          type="text"
          value={userZip}
          width={4}
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
