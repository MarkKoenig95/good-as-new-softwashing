import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

function PriceSlider(props) {
  const { value, setValue } = props;
  const [title, setTitle] = useState("2000-2500 Square Feet");
  const step = 100;
  const min = 500;
  const max = 3502;

  const _handleValueChange = useCallback(
    ({ target }) => {
      setValue(target.value);
      let nValue = parseInt(target.value, 10);

      let tempTitle = "";
      if (nValue < 1000) {
        tempTitle = "Less than 1000";
        setValue(500);
      } else if (nValue < 1500) {
        tempTitle = "1000-1500";
        setValue(1000);
      } else if (nValue < 2000) {
        tempTitle = "1500-2000";
        setValue(1500);
      } else if (nValue < 2500) {
        tempTitle = "2000-2500";
        setValue(2000);
      } else if (nValue < 3000) {
        tempTitle = "2500-3000";
        setValue(2500);
      } else if (nValue < 3500) {
        tempTitle = "3000-3500";
        setValue(3000);
      } else if (nValue >= 3500) {
        tempTitle = "More than 3500";
        setValue(4000);
      }

      setTitle(tempTitle + " Square Feet");
    },
    [setValue]
  );

  useEffect(() => {
    _handleValueChange({ target: { value: value } });
  }, [_handleValueChange, value]);

  return (
    <>
      <h4 className="mt-5">{title}</h4>
      <RangeSlider
        value={value}
        onChange={_handleValueChange}
        step={step}
        max={max}
        min={min}
        orientation="horizontal"
        tooltip="off"
      />
    </>
  );
}

function StoriesInput(props) {
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

function MaterialsInput(props) {
  const { currentChecked, setCurrentChecked, materials } = props;

  const _handleCheck = (index) => {
    setCurrentChecked(index);
  };

  return (
    <Row className="align-items-center mx-0">
      <h4 className="p-0 w-auto" style={{ marginRight: "1rem" }}>
        Material:
      </h4>
      {materials.map((material, index) => (
        <Form.Check
          key={material.name + material.message + index}
          className="w-auto"
          type="radio"
          label={material.name}
          checked={index === currentChecked}
          onChange={() => {
            _handleCheck(index);
          }}
        />
      ))}
    </Row>
  );
}

function Pricing(props) {
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
        <PriceSlider value={squareFeet} setValue={setSquareFeet} />
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

function Service(props) {
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

export default function Services() {
  const [squareFeet, setSquareFeet] = useState(2000);
  const [stories, setStories] = useState(1);

  const contactText = "Contact for a free quote";

  const houseWashPriceTable = {
    titles: ["One Story", "Two Story", "Three Story"],
    sf500: [250, 300, 350],
    sf1000: [350, 400, 450],
    sf1500: [400, 500, 550],
    sf2000: [450, 500, 550],
    sf2500: [500, 550, 600],
    sf3000: [550, 600, 650],
    sf4000: [contactText, contactText, contactText],
  };

  const houseWashSpecialMaterialText =
    "Cedar shakes require extra care and slightly different " +
    "cleaning processes to ensure no damage is done. " +
    "Please contact us for a free quote personalized to your specific situation.";

  const houseWashMaterials = [
    { name: "Vynil", message: null },
    { name: "Aluminum", message: null },
    { name: "Brick", message: null },
    { name: "Stone", message: null },
    {
      name: "Cedar",
      message: houseWashSpecialMaterialText,
    },
  ];

  const roofWash3StoryText =
    "Due to the increased risk and specialized equipment needed, a free in person quote is necessary for third story roof washes.";

  const roofWashSpecialMaterialText =
    "This roof material requires extra care and slightly " +
    "different cleaning processes to ensure no damage is done. " +
    "Please contact us for a free quote personalized to your specific situation.";

  const roofWashMaterials = [
    { name: "Asphalt", message: null },
    { name: "Cedar", message: roofWashSpecialMaterialText },
    { name: "Slate", message: roofWashSpecialMaterialText },
    { name: "Metal", message: roofWashSpecialMaterialText },
  ];

  const roofWashPriceTable = {
    titles: ["One Story", "Two Story"],
    sf500: [300, 400, roofWash3StoryText],
    sf1000: [400, 500, roofWash3StoryText],
    sf1500: [500, 600, roofWash3StoryText],
    sf2000: [600, 700, roofWash3StoryText],
    sf2500: [700, 800, roofWash3StoryText],
    sf3000: [800, 900, roofWash3StoryText],
    sf4000: [contactText, contactText, roofWash3StoryText],
  };

  return (
    <div className="container p-5">
      <Service
        imageSource="images/services_house-washing.jpeg"
        title="House Washing"
        priceTable={houseWashPriceTable}
        materials={houseWashMaterials}
        squareFeet={squareFeet}
        setSquareFeet={setSquareFeet}
        stories={stories}
        setStories={setStories}
      >
        <p>
          Those stains on your vinyl or aluminum siding can be cleaned! Although
          most people associate cleaning siding with a pressure washer this can
          actually lead to issues. The best solution is to use soft washing.
          Soft washing uses low pressure and a cleaning solution to melt those
          stains right off your siding. I can also clean brick, stone and wood
          homes. Whether it's rust, algae or mold, I can clean it!
        </p>
      </Service>

      <Service
        imageSource="images/services_roof-washing.jpeg"
        title="Roof Washing"
        priceTable={roofWashPriceTable}
        materials={roofWashMaterials}
        squareFeet={squareFeet}
        setSquareFeet={setSquareFeet}
        stories={stories}
        setStories={setStories}
      >
        <p>
          Does your roof have black stains and/or moss? Instead of replacing a
          still leak free roof, you can save thousands by getting it cleaned!
          Those stains CAN be removed with the manufacturer's recommended
          process. DO NOT hire someone who will pressure wash your roof. This
          will cause damage and shorten the life of the roof. Instead, let me
          remove those stains with my custom built softwash system according to
          the roof manufacturer's instructions. I do not walk on the roof and
          take great care not to create any leaks or damage. Besides asphalt
          shingles, I can clean metal, Galvalume, cedar shake as well as slate
          roofs.
          <br />
          <br />
          (Moss Disclaimer: While the black stains (Gloeocapsa magma) on the
          roof will be cleaned the same day, moss cannot be completely removed
          the day of the roof cleaning. The soft washing process will kill the
          moss, but depending on the species and the extent it has grown roots
          into the shingles it may take 2 months or longer to naturally fall off
          the roof. Excessive brushing or pressure washing can cause leaks and
          lead to expensive roof repairs or even replacement.)
        </p>
      </Service>
      <Alert className="row" variant="danger">
        <b>
          <u>Severe Moss</u>:{" "}
        </b>
        Although a standard roof cleaning will neutralize moss, severe moss
        growth will require extra labor to properly remove. This will incur an
        extra charge based on the extent of the moss growth.
      </Alert>
    </div>
  );
}
