import { useEffect, useState } from "react";
import { Alert, Col, Container } from "react-bootstrap";
import SquareFootageSlider from "./SquareFootageSlider";
import StoriesInput from "./StoriesInput";
import MaterialsInput from "./MaterialsInput";

export default function Pricing(props) {
  const {
    title,
    priceTable,
    materials,
    squareFeet,
    setSquareFeet,
    stories,
    setStories,
  } = props;
  const [currentChecked, setCurrentChecked] = useState(0);
  const [text, setText] = useState("");
  const [price, setPrice] = useState(2500);
  const [hasPrice, setHasPrice] = useState(true);

  useEffect(() => {
    const { message } = materials[currentChecked];
    const sfKey = "sf" + squareFeet;
    setPrice(priceTable[sfKey][stories - 1]);
    let tempHasPrice = typeof price === "number" ? true : false;

    if (message) {
      setText(message);
      tempHasPrice = false;
    } else {
      setText(price);
    }

    setHasPrice(tempHasPrice);
  }, [currentChecked, materials, price, priceTable, squareFeet, stories]);

  return (
    <Container className="rounded bg-light p-5">
      <Col>
        <h1 className="mb-5 fw-bold">{title} Average Price</h1>
        <SquareFootageSlider value={squareFeet} setValue={setSquareFeet} />
        <StoriesInput stories={stories} setStories={setStories} />
        <MaterialsInput
          currentChecked={currentChecked}
          setCurrentChecked={setCurrentChecked}
          materials={materials}
        />
        <h2 className="text-primary my-5">
          {hasPrice ? (
            <>
              <u>Average</u> Price ${price}
            </>
          ) : (
            <>{text}</>
          )}
        </h2>
        <Alert variant="warning">
          A water source is required to complete cleaning. All prices are
          subject to 6% Pennsylvania sales tax and an additional 2% within
          Philadelphia. If you are located in New Jersey a sales tax of 6.625%
          will be charged. Each job is unique, so these prices are just a rough
          estimate.
        </Alert>
      </Col>
    </Container>
  );
}
