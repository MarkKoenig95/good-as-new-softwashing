import { Container, Image, Row } from "react-bootstrap";
import Pricing from "../components/Pricing/Pricing";

export default function Service(props) {
  const {
    children,
    imageSource,
    priceTable,
    materials,
    title,
    squareFeet,
    setSquareFeet,
    stories,
    setStories,
  } = props;

  return (
    <Row className="align-items-center mt-5">
      <Container className="col-sm-10 col-md-6">
        <h1 className="mb-4 fw-bold">{title}</h1>
        <div className="mb-5 mt-4 text-">{children}</div>
      </Container>
      <Image fluid className="mt-5 mb-5 col-md-6" src={imageSource} />
      <Pricing
        priceTable={priceTable}
        title={title}
        materials={materials}
        squareFeet={squareFeet}
        setSquareFeet={setSquareFeet}
        stories={stories}
        setStories={setStories}
      />
    </Row>
  );
}
