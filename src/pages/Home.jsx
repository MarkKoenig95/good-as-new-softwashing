import CallToAction from "../components/CallToAction";
import InfoCards from "../components/InfoCards";
import Jumbotron from "../components/Jumbotron";
import Videos from "../components/Videos";

export default function Home() {
  return (
    <div className="container-fluid m4">
      <Jumbotron />
      <Videos />
      <CallToAction />
      <InfoCards />
    </div>
  );
}
