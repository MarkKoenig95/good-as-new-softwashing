import { useState } from "react";
import { Alert } from "react-bootstrap";
import Service from "../components/Service";
import {
  houseWashMaterials,
  houseWashPriceTable,
  roofWashMaterials,
  roofWashPriceTable,
} from "../values/pricing";

export default function Services() {
  const [squareFeet, setSquareFeet] = useState(2000);
  const [stories, setStories] = useState(1);

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
