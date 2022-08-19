import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ParticleComponent from './components/Particle';
import ImageButton from './components/ImageButton';
import github from './media/github.jpeg';
import soundcloud from './media/soundcloud.jpeg'
import resume from './media/resume.png';
import { Document, Page, pdfjs } from "react-pdf";
import resumepdf from './media/raavicresume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends Component {

  constructor() {
    super()
    this.state = {
      Mode: "Home" // "Home","Resume"
    }
    this.openResume = this.openResume.bind(this);
    this.openHome = this.openHome.bind(this);
  }

  openResume() {
    this.setState({ Mode: "Resume" });
  }

  openHome() {
    this.setState({ Mode: "Home" });
  }

  render() {
    if (this.state.Mode == "Home") {
      return (
        <div className="App">
          <br />
          <br />

          <Container className='main'>
            <Row>
              <Col>
              </Col>
              <Col>
                <h1>RAAVI</h1>
              </Col>
              <Col>
              </Col>
            </Row>
            <div className='mainButtons'>
              <Row xs={1} md={3}>
                <Col>
                  <ImageButton link={"https://github.com/rkc3356"} name={"GITHUB"} img={github} alt={"Github cat"} />
                </Col>
                <Col>
                  <ImageButton link={"https://soundcloud.com/prodraavi"} name={"SOUNDCLOUD"} img={soundcloud} alt={"SOUNDCLOUD"} />
                </Col>
                <Col>
                  <ImageButton onClick={this.openResume} name={"RESUMÉ"} img={resume} alt={"RESUMÉ"} />
                </Col>
              </Row>
            </div>
          </Container>
          <ParticleComponent />
        </div>
      );
    }
    else if (this.state.Mode == "Resume") {
      return (
        <div className='Resume'>
          <Container>
            <Row>
              <Col>
                <Document file={resumepdf}>
                  <Page pageNumber={1} />
                </Document>
              </Col>
              <Col>
                <button onClick={this.openHome}>HOME</button>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default App;
