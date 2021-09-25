import Carousel from "react-bootstrap/Carousel";

export default function Jumbotron() {
  return (
    <div className=" row p-3 mb-4 bg-light rounded-3">
      <div className="m-5 col-2 py-3">
        <h1 className="display-5 fw-bold">Soft Washing</h1>
        <p className="col-md-8 fs-4">That's what we do.</p>

        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide col-8"
        data-bs-ride="carousel"
      >
        <Carousel className="carousel" fade prevLabel="" nextLabel="">
          <Carousel.Item interval={5000}>
            <img
              src="before-after-house.jpg"
              className="d-block w-100"
              alt="before and after house"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src="before-after-roof.jpg"
              className="d-block w-100"
              alt="before and after roof"
            />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src="before-after-siding.jpg"
              className="d-block w-100"
              alt="before and after siding"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
