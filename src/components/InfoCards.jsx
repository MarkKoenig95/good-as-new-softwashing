import Card from "./Card";

export default function InfoCards() {
  return (
    <div className="row align-items-center">
      <div className="col">
        <Card title="About" link="/#/about">
          <p>This is what it is or what we are</p>
        </Card>
      </div>
      <div className="col">
        <Card title="Pricing" link="/#/pricing">
          <p>Here are some pricing details</p>
          <p>$1,000,000 | Quote</p>
          <p>$1,000,000 | Work</p>
          <p>$1,000,000 | Processing fees</p>
        </Card>
      </div>
      <div className="col">
        <Card title="FAQ" link="/#/FAQ">
          <h5>Why would I want this?</h5>
          <p>Because you're not an idiot</p>
          <h5>How does it work?</h5>
          <p>We softly wash things</p>
        </Card>
      </div>
    </div>
  );
}
