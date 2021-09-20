import { Container, Row, Col } from "reactstrap";


const Footer = () => {
    return (
        <footer style={{color: '#8d9297', marginTop: 70, textAlign: 'center', borderTop: '1px solid #eee'}} >
            <Container>
                <Row style={{ padding: 20 }}>
                    <Col xs={12} >
                        <small>
                            &copy; {new Date().getFullYear() } Al Jama-Ah. All rights reserved.
                        </small>
                    </Col>

                    {/* <Col xs={12} >
                        <small>
                            &copy; {new Date().getFullYear() } Al Jama-Ah. All rights reserved.
                        </small>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
