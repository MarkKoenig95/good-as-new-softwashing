import { Col, Container, Image, Row } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container py-4">
      <Container>
        <Row className="align-items-center justify-content-around p-2">
          <Col className="p-4" xs={6} md={4}>
            <Image src="images/logo.png" fluid rounded />
          </Col>
          <Col className="align-items-center p-3" xs={11} sm={8} md={6}>
            <h3 className="mb-3">Ethan Blomquist</h3>
            <p>(Fully Insured)</p>
            <p>
              Phone: <a href="tel:267-396-7855">267-396-7855</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:Ethan@GANsoftwashing.com">
                Ethan@GANsoftwashing.com
              </a>
            </p>
            <Row className="justify-content-around p-2">
              <a className="col-3" href="https://facebook.com/gansoftwashing">
                <Image src="images/icon_facebook.png" width="30" height="30" />
              </a>
              <a className="col-3" href="https://instagram.com/gansoftwashing">
                <Image src="images/icon_instagram.png" width="30" height="30" />
              </a>
            </Row>
          </Col>
        </Row>
      </Container>
      <ContactForm />
    </div>
  );
}
