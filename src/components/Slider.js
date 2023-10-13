import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/electronics.png'
import image2 from '../images/jewellery.png'
import image3 from '../images/mens.png'
import image4 from '../images/women.png'
import { BrowserRouter as Link } from 'react-router-dom'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{padding:'5px'}}>
    <div className="container d-flex justify-content-center">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Link to='https://fakestoreapi.com/products/category/electronics'><img src={image1} alt="Electronics"/></Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/category/jewelery'><img src={image2} alt="Jewelery" /></Link>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Mens Clothing" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image4} alt="Womens Clothing" />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default ControlledCarousel;