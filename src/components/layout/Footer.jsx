import { Container, Row, Col } from "reactstrap";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';


const Footer = () => {
    return (
        <footer style={{color: '#8d9297', marginTop: 70, textAlign: 'center', borderTop: '1px solid #eee'}}  className="main-footer">
            <Container>
                <Row style={{ padding: 20 }}>
                    <Col xs={12} >
                        <small>
                            &copy; {new Date().getFullYear() } Al Jama-Ah. All rights reserved.
                        </small>
                    </Col>

                    <Col xs={12} style={{ marginTop: '10px' }}>
                        <a href="https://web.facebook.com/aljamaahZA" target="_blank" rel="noreferrer" className="main-footer__icon">
                            <FiFacebook />
                       </a>
                        <a href="https://twitter.com/aljama_za" target="_blank" rel="noreferrer" className="main-footer__icon">
                            <FiTwitter />
                       </a>
                        <a href="https://www.instagram.com/aljama_ah/" target="_blank" rel="noreferrer" className="main-footer__icon">
                            <FiInstagram />
                       </a>
                        <a href="https://www.youtube.com/channel/UC-ENzP1sNoAwDU3601l2hzA" target="_blank" rel="noreferrer" className="main-footer__icon">
                            <FiYoutube />
                       </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
