import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import Pic1 from '../../assets/1.jpg';
import Pic2 from '../../assets/2.jpeg';
import Pic3 from '../../assets/3.jpg';

class HeaderCarousel extends Component {
  render() {
    const imgSize = {
      width: '1430px',
      height: '400px'
    }
    return (
      <Carousel>
        <Carousel.Item>
          <img style={imgSize} alt="Katherine" src={Pic1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Live Better.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={imgSize} alt="Katherine" src={Pic2} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Be Happy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={imgSize} alt="Katherine" src={Pic3} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Go Far.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default HeaderCarousel;
