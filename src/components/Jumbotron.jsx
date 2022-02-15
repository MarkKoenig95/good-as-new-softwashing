import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Jumbotron() {
  const slideshowPictures = [1, 2, 3];
  return (
    <div className=" row p-3 mb-4 bg-primary text-white align-items-center justify-content-around">
      <div className="m-2 p-5 col-lg-3 col-md-10">
        <h1 className="display-5 fw-bold">Soft Washing</h1>
        <p className="fs-4">Make your home look Good As New</p>
      </div>
      <Carousel
        className="m-3 col-lg-7 col-md-10"
        fade
        prevLabel=""
        nextLabel=""
      >
        {slideshowPictures.map((pictureNumber) => {
          let src = `images/slideshow_${pictureNumber}.png`;
          return (
            <Carousel.Item key={src} interval={5000}>
              <Image
                src={src}
                className="d-block mh-25 w-100"
                alt="before and after"
                fluid
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
