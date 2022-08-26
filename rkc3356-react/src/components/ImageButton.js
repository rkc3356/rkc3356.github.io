import { Component } from 'react';
import '../App.css';
import { Container, Row, Col, } from 'reactstrap';

class ImageButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const openInNewTab = url => {
            window.open(url, '_blank');
        };
        if (this.props.type === "link") {
            return (
                <div className='ImageButton'>
                    <Container>
                        <Row>
                            <Col>
                                <img src={this.props.img} alt={this.props.alt} width={100} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button onClick={() => openInNewTab(this.props.link)}>{this.props.name}</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
        else if (this.props.type === "pdf") {
            return (
                <div className='ImageButton'>
                    <Container>
                        <Row>
                            <Col>
                                <img src={this.props.img} alt={this.props.alt} width={100} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button onClick={this.props.pdf}>{this.props.name}</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }

    }
}

export default ImageButton;