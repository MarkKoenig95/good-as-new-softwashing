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
          buttonText="Click to learn more and see average pricing"
          title="Services and Pricing"
          link="/#/services"
        >
          <ul>
            <li className="fw-bold">
              <h5>House Washing</h5>
            </li>
            <li className="fw-bold">
              <h5>Roof Washing</h5>
            </li>
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
