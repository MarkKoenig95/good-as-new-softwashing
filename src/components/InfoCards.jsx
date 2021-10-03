import Card from "./Card";

export default function InfoCards() {
  return (
    <div className="row align-items-center">
      <div className="col">
        <Card
          buttonText="Click to request a quote"
          title="Contact"
          link="/#/contact"
        >
          <h5 className="mb-3 mt-3">Ethan Blomquist</h5>
          <p>
            Phone: <a href="tel:267-396-7855">267-396-7855</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:Ethan@GANsoftwashing.com">
              Ethan@GANsoftwashing.com
            </a>
          </p>
        </Card>
      </div>
      <div className="col">
        <Card
          buttonText="Click to learn more"
          title="Services"
          link="/#/services"
        >
          <ul>
            <li>House Washing</li>
            <li>Gutter Cleaning</li>
            <li>Gutter Brightening</li>
            <li>Surface Cleaning</li>
            <li>Deck Cleaning</li>
          </ul>
        </Card>
      </div>
      <div className="col">
        <Card buttonText="Click to learn more" title="FAQ" link="/#/about">
          <h6 className="mb-4">What is Soft Washing?</h6>
          <h6 className="mb-4">Why not Pressure Wash?</h6>
          <h6 className="mb-4">Why does my siding look chalky?</h6>
          <h6 className="mb-4">What is oxidation?</h6>
        </Card>
      </div>
    </div>
  );
}
