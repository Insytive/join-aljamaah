// import React from 'react';
import { Row, Container, Col } from 'reactstrap';
import { BsFolderCheck } from 'react-icons/bs';

const SuccessPage = () => {
    return (
        <section className="success-page">
            <Container>
                <Row>
                    <Col xs={12}>
                        <header className="success__header">
                            <span>
                                <BsFolderCheck />
                            </span>
                        </header>

                        <section className="success__content">
                            <h3>Thank You!</h3>
                            <p>Your submission has sent.</p>
                        </section>
                    </Col>
                </Row>
           </Container>
        </section>
    )
}

export default SuccessPage;
