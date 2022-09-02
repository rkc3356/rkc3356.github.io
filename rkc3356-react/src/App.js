import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import ParticleComponent from './components/Particle';
import ImageButton from './components/ImageButton';
import github from './media/github.jpeg';
import soundcloud from './media/soundcloud.jpeg'
import resume from './media/resume.png';
import { Document, Page, pdfjs } from "react-pdf";
import resumepdf from './media/raavicresume.pdf';
import RAAVI_text from './media/RAAVI1.png';
import subway from './media/IMG_5566.jpg';
import home from './media/home.png';
import linkedin1 from './media/linkedin1.jpeg';
import mail from './media/mail.jpeg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class App extends Component {

  constructor() {
    super()
    this.state = {
      Mode: "Welcome" // "Welcome","Home","Resume"
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
    if (this.state.Mode === "Home") {
      return (
        <div className="App">
          <br />
          <br />
          <img id={"nameText"} src={RAAVI_text} alt={"RAAVI"} width={300} />
          <Container className='main'>
            <Row xs={1} md={3}>
              <Col>
                <ImageButton type={"link"} link={"https://github.com/rkc3356"} name={"GITHUB"} img={github} alt={"Github cat"} />
              </Col>
              <Col>
                <ImageButton type={"pdf"} pdf={this.openResume} name={"RESUMÉ"} img={resume} alt={"RESUMÉ"} />
              </Col>
              <Col>
                <ImageButton type={"link"} link={"https://www.linkedin.com/in/raavi-chowdhury-38957b194/"} name={"LINKEDIN"} img={linkedin1} alt={"LINKEDIN"} />
              </Col>
              <Col>
                <ImageButton type={"link"} link={"https://soundcloud.com/prodraavi"} name={"SOUNDCLOUD"} img={soundcloud} alt={"SOUNDCLOUD"} />
              </Col>
              <Col>
                <ImageButton type={"link"} link={"mailto:rkc3356@g.rit.edu"} name={"EMAIL"} img={mail} alt={"EMAIL"} />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <img src={subway} alt={"GREEN TINTED DESOLATE SUBWAY"} width={75} />
              </Col>
            </Row>
          </Container>
          <ParticleComponent />
        </div>
      );
    }
    else if (this.state.Mode === "Welcome") {
      return (
        <div className='Welcome'>
          <br />
          <img src={home} alt={"Home Icon"} width={20} />
          <br />
          <button onClick={this.openHome}>WELCOME</button>
          <br />
          <br />
          <br />
          <ParticleComponent />
        </div>
      );
    }
    else if (this.state.Mode === "Resume") {
      return (
        <div className='Resume'>
          <br />
          <img src={home} alt={"HOME ICON"} width={20} />
          <br />
          <button onClick={this.openHome}>HOME</button>
          <br />
          <br />
          <br />
          <div className={"resumePDF"}>
            <Document file={resumepdf}>
              <Page pageNumber={1} />
            </Document>
          </div>
          <ParticleComponent />
        </div>
      );
    }
  }
}

export default App;
