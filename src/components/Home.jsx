import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <div className="generesContainer container">
          <div className="row justify-content-between">
            <div className="col-6">
              <div className="row d-block d-md-flex">
                <div className="col-4">
                  <h1>Tv Show</h1>
                </div>
                <div className="col-4 d-flex align-items-center">
                  <div className="dropdown">
                    <Dropdown>
                      <Dropdown.Toggle variant="" className="border border-2" id="dropdown-basic">
                        Generes
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row justify-content-end">
                <div className="col-4 border border-light d-flex justify-content-center align-items-center p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-justify-left" viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </div>
                <div className="col-4 border border-light d-flex justify-content-center align-items-center p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default Home;
