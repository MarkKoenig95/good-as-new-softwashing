import InfoCards from "../components/InfoCards";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <div className="container-fluid py-4">
      <Jumbotron />
      <InfoCards />
    </div>
  );
}
