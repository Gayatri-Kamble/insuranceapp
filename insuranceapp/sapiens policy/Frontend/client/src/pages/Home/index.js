import { useState, useEffect } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Image from "../../components/Image";
import { Row, Col, Container } from "reactstrap";


const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8080/destination`;
    axios.get(url).then((response) => {
      const result = response.data;
      setImages(result.data);
      console.log(result);
      
    });
  }, []);

  let allimages = images.map((item) => {
    return (
      <Col md="4">
        <Image image={item}></Image>
      </Col>
    );
  });

  return (
    <div>
      <br></br>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://licindia.in/Slider_Images/1-Dhan-sanchay"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://licindia.in/Slider_Images/1-PAN-Card"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://licindia.in/Slider_Images/LIC_Jeevan-Saakshya_980-x-292-pix"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Container>
        <Row>{allimages}</Row>
      </Container>
    </div>
  );
};

export default Home;
