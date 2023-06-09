import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/components/carousel.css";

function Images_carousel() {
  return (
    <div id="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/carousel.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/carousel.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/carousel.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Images_carousel;