import { Container, Image, Row } from "react-bootstrap";

function Service(props) {
  const { children, imageSource, title } = props;
  return (
    <Row className=" align-items-center">
      <Container className="col-sm-10 col-md-6">
        <h1 className="mb-5">{title}</h1>
        <h5 className="mb-5 mt-5">{children}</h5>
      </Container>
      <Image fluid className="mb-5 col-md-6" src={imageSource} />

      <hr className="border-primary" />
    </Row>
  );
}

export default function Services() {
  return (
    <div className="container p-5">
      <Service imageSource="images/house-washing.jpeg" title="House Washing">
        Uses a soft wash process to remove stains from any outside surface of
        the home other than the roof.
      </Service>

      <Service imageSource="images/roof-washing.jpeg" title="Roof Washing">
        Uses a soft wash process to remove stains and organic growth from the
        roof’s surface.
      </Service>

      <Service
        imageSource="images/gutter-cleaning.jpeg"
        title="Gutter Cleaning"
      >
        Removal of debris in gutters and downspouts to ensure proper water flow.
      </Service>

      <Service
        imageSource="images/gutter-brightening.png"
        title="Gutter Brightening"
      >
        Uses a special chemical to remove stains and restore color on the
        outside surface of gutters.
      </Service>

      <Service
        imageSource="images/surface-cleaning.png"
        title="Surface Cleaning"
      >
        Uses high pressure to remove stains on concrete, stone or brick ground
        surfaces.
      </Service>

      <Service imageSource="images/deck-cleaning.png" title="Deck Cleaning">
        Uses a soft wash process to clean organic growth and stains off of
        decks.
      </Service>
    </div>
  );
}
