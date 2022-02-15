import { Image } from "react-bootstrap";

function Question(props) {
  const { children, title, center } = props;

  let bodyClasses = "mb-5";

  if (center) {
    bodyClasses += " text-center";
  }

  return (
    <>
      <hr className="border-primary" />
      <h4 className="mb-5 mt-5 text-center">{title}</h4>
      <p className={bodyClasses}>{children}</p>
    </>
  );
}

export default function About() {
  return (
    <div className="container-fluid col-sm-11 col-md-9 p-5">
      <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
      <Question title="What is Soft Washing?">
        Soft washing is an alternative to pressure washing. It is a gentle
        cleaning process used to remove organic growth and stains from the
        exterior of homes and commercial buildings.
        <br />
        <br />
        This is done by using a combination of bleach (sodium hypochlorite) and
        soap (surfactant), which is sprayed onto the building at only 60 PSI.
        After the mixture sits for a few minutes it is rinsed off with plain
        water.
      </Question>
      <Question title="Are the chemicals used in soft washing safe?">
        The bleach used in house washing is very diluted. A 1%-3% strength
        bleach (sodium hypochlorite) solution is used on siding. A roof
        generally requires a mix of 5% or 6%. For a point of reference, a
        standard bottle of clorox has a strength of 7.5%. The only other
        substance used in the cleaning mixture is diluted soap. This assists in
        the cleaning process and allows the mixture to cling to the vertical
        surfaces more effectively, giving it time to work. The final step is a
        very thorough rinse of all surrounding plants and home surfaces with
        pure water. This further dilutes the already diluted mixture and ensures
        it will not damage anything.
      </Question>

      <Question title="Why not just use a pressure washer?">
        The high PSI that a pressure washer operates can easily cause damage to
        a home. For example, water can be forced into the overlap on siding,
        allowing water behind the siding and potentially causing water damage.
        Additionally, pressure washing is not as effective at neutralizing the
        organic matter that causes most house stains.
      </Question>

      <Question title="Why does my siding look chalky? What is oxidation?">
        Oxidation occurs over time on any painted surface exposed to the
        elements. Oxidation causes a chalky, dull appearance. If a pressure
        washer is used on oxidized siding, it can cause ugly streaks to appear.
        (See Picture Below) One benefit of soft washing is the ability to clean
        stains off oxidized siding without causing these streaks.
      </Question>
      <div className="container-fluid text-center">
        <Image
          fluid
          className="col-sm-9 col-md-7"
          src="images/faq_oxidation.jpeg"
        />
      </div>
      <Question title="Do you remove oxidation?">
        Oxidation removal is possible with specialized chemicals. However, this
        is best performed by a team of multiple people all working together, as
        letting this chemical dry can damage the home. Due to this risk I cannot
        safely perform this service on vinyl siding. However, I can remove
        oxidation on smaller surfaces such as shutters and gutters.
      </Question>
      <Question
        title="I have a rust stain on my house. Can you remove it?"
        center
      >
        Yes! We are able to remove stains caused by rust.
      </Question>
      <div className="container-fluid text-center">
        <Image
          fluid
          className="col-sm-9 col-md-7"
          src="images/faq_rust-stain.jpeg"
        />
      </div>
    </div>
  );
}
