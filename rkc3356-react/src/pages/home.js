import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import ParticleComponent from '../components/Particle';
import ImageButton from '../components/ImageButton';
import github from '../media/github.jpeg';
import soundcloud from '../media/soundcloud.jpeg'
import RAAVI_text from '../media/RAAVI1.png';
import subway from '../media/IMG_5566.jpg';
import linkedin1 from '../media/linkedin1.jpeg';
import mail from '../media/mail.jpeg';
import spotify from '../media/spotify.jpeg';

function Home() {

    return (
        <div className="App">
            <br />
            <br />
            <img id={"nameText"} src={RAAVI_text} alt={"RAAVI"} width={300} />
            <Container className='main'>
                <Row xs={1} md={3}>
                    <Col>
                        <ImageButton to={"https://open.spotify.com/artist/417kM0woqUMxUUR8qedzC9?si=7jk8VNhRRm67lCOM5jxM9w"} name={"SPOTIFY"} img={spotify} alt={"SPOTIFY"} />
                    </Col>
                    <Col>
                        <ImageButton to={"https://soundcloud.com/prodraavi"} name={"SOUNDCLOUD"} img={soundcloud} alt={"SOUNDCLOUD"} />
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
