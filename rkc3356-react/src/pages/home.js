import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import ParticleComponent from '../components/Particle';
import ImageButton from '../components/ImageButton';
import github from '../media/github.jpeg';
import soundcloud from '../media/soundcloud.jpeg'
import resume from '../media/resume.png';
import RAAVI_text from '../media/RAAVI1.png';
import subway from '../media/IMG_5566.jpg';
import linkedin1 from '../media/linkedin1.jpeg';
import mail from '../media/mail.jpeg';

function Home() {

    return (
        <div className="App">
            <br />
            <br />
            <img id={"nameText"} src={RAAVI_text} alt={"RAAVI"} width={300} />
            <Container className='main'>
                <Row xs={1} md={3}>
                    <Col>
                        <ImageButton to={"https://github.com/rkc3356"} name={"GITHUB"} img={github} alt={"Github cat"} />
                    </Col>
                    <Col className={'ResumeButton'}>
                        <ImageButton to={'/resume'} name={"RESUMÉ"} img={resume} alt={"RESUMÉ"} />
                    </Col>
                    <Col>
                        <ImageButton to={"https://www.linkedin.com/in/raavi-chowdhury-38957b194/"} name={"LINKEDIN"} img={linkedin1} alt={"LINKEDIN"} />
                    </Col>
                    <Col>
                        <ImageButton to={"https://soundcloud.com/prodraavi"} name={"SOUNDCLOUD"} img={soundcloud} alt={"SOUNDCLOUD"} />
                    </Col>
                    <Col>
                        <ImageButton to={"mailto:rkc3356@g.rit.edu"} name={"EMAIL"} img={mail} alt={"EMAIL"} />
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

export default Home;
