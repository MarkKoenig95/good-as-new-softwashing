import { Carousel } from "react-bootstrap";

export default function Videos() {
  const embedCodes = ["DSe3j1bLvHg", "_A-YZVyMDAo", "nGbdLgAtuko"];

  return (
    <Carousel
      className="m-auto col-lg-8"
      interval={null}
      fade
      prevLabel=""
      nextLabel=""
    >
      {embedCodes.map((code) => (
        <Carousel.Item
          key={code}
          interval={null}
          className="m-auto bg-dark text-center"
        >
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + code}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
