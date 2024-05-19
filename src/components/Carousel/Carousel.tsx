import { ReactElement } from 'react';
import './Carousel.css'
import Carousel from 'react-bootstrap/Carousel';

interface Props {
    images : ReactElement[]
}

function MainCarousel({images} : Props) {

    return (
        <Carousel>
            {
                images.map((image, index) => (
                    <Carousel.Item key={index}>
                        {image}
                    </Carousel.Item>
                ))
            }
          {/* <Carousel.Item>
            <ExampleCarouselImage text="First slide" />
          </Carousel.Item> */}
        </Carousel>
      );
}

export default MainCarousel
