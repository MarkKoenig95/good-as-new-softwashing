import InfoCards from "../components/InfoCards";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <div className="container-fluid m4">
      <Jumbotron />
      <InfoCards />
    </div>
  );
}
