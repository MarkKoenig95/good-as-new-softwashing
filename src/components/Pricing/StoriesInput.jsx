import { Button, Row } from "react-bootstrap";

export default function StoriesInput(props) {
  const { stories, setStories } = props;

  const suffix = stories > 1 ? "ies" : "y";

  return (
    <Row className="align-items-center mx-0 mt-5 mb-5">
      <Button
        onClick={() => {
          const tempStories = stories - 1;
          if (tempStories > 0) setStories(tempStories);
        }}
        className="rounded-circle m-3lg-2"
        style={{ width: 50, height: 50 }}
      >
        <h3 className="fw-bold">-</h3>
      </Button>
      <h4 className="lg-2 m-3 w-auto">{stories + " Stor" + suffix}</h4>
      <Button
        onClick={() => {
          const tempStories = stories + 1;

          if (tempStories < 4) setStories(tempStories);
        }}
        className="rounded-circle m-3 lg-2"
        style={{ width: 50, height: 50 }}
      >
        <h3 className="fw-bold">+</h3>
      </Button>
    </Row>
  );
}
