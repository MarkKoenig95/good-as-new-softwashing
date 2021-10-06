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
          <ul>
            <li>What is Soft Washing?</li>
            <li>Why not just use a pressure washer?</li>
            <li>Why does my siding look chalky?</li>
            <li>I have a rust stain on my house. Can you remove it?</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
