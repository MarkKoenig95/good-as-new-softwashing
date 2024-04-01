import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light footer">
      <Row className="p-2 container-fluid align-items-center justify-content-around">
        <Col className="text-center">Good As New Soft Washing LLC</Col>
        <Col className="text-center">Copyright {new Date().getFullYear()}</Col>
      </Row>
    </footer>
  );
}
