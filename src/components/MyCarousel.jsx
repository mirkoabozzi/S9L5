import { Component } from "react";
import { Carousel } from "react-bootstrap";
import MyCarouselItem from "./MyCarouselItem";

class MyCarousel extends Component {
  render() {
    return (
      <>
        <h1 className="mt-4">{this.props.titolo}</h1>
        <Carousel>
          <MyCarouselItem film={this.props.film} />
        </Carousel>
      </>
    );
  }
}
export default MyCarousel;
