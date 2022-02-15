import { Container, Image, Col, Row } from "react-bootstrap";

export default function CallToAction() {
  return (
    <Container className="bg-primary text-white rounded p-4 mt-5 mb-3">
      <Row className="align-items-start">
        <Col xs={12} md={6} className="h-100 justify-content-between">
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>
          <Image fluid src="images/home-page.jpeg" className="mb-4" />
        </Col>
        <Col xs={12} md={6} className="mt-2 align-self-center">
          <p>
            Exterior cleaning carries some risk of damaging your property,
            that's why you want someone fully insured, with the proper equipment
            and the knowledge to use it effectively. That's us. We have an eye
            for detail and take the utmost care to make sure to get your home or
            business as clean as possible with no damage to your property. We
            accomplish this with a custom built system that uses a combination
            of high pressure water and low pressure cleaning solution depending
            on the situation. Give me a call, text or email to see how
            professional grade exterior cleaning can transform your home or
            business!
          </p>
        </Col>
      </Row>
    </Container>
  );
}
