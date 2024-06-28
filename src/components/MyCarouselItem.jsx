import { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

class MyCarouselItem extends Component {
  state = {
    movies: [],
  };

  fetchFilm = () => {
    fetch("http://www.omdbapi.com/?apikey=30d34795&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Dati non ricevuti");
        }
      })
      .then((response) => {
        this.setState({ movies: response.Search });
        console.log("Film della fetch", response.Search);
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchFilm();
  }

  render() {
    return (
      <Carousel.Item className="d-block" interval={1000}>
        <Row className="g-1">
          {this.state.movies.slice(0, 4).map((film, index) => (
            <Col sm="3" key={index}>
              {<img src={film.Poster} alt="" />}
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }
}
export default MyCarouselItem;
