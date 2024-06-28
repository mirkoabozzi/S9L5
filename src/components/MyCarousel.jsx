import { Component } from "react";
import { Carousel, Col, Image, Row } from "react-bootstrap";

class MyCarousel extends Component {
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
      <>
        <h1 className="mt-3">{this.props.titolo}</h1>
        <Carousel>
          <Carousel.Item interval={2000}>
            <Row className="g-2">
              {this.state.movies.slice(0, 6).map((film, index) => (
                <Col sm="2" key={index}>
                  {<Image className="img-fluid" src={film.Poster} alt="Copertina" />}
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="g-2">
              {this.state.movies.slice(0, 6).map((film, index) => (
                <Col sm="2" key={index}>
                  {<Image className="img-fluid" src={film.Poster} alt="Copertina" />}
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="g-2">
              {this.state.movies.slice(0, 6).map((film, index) => (
                <Col sm="2" key={index}>
                  {<Image className="img-fluid" src={film.Poster} alt="Copertina" />}
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default MyCarousel;
