import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



import Form  from '../form/Form';

class Registration extends Component {
  result = (values) => {
    // alert('result is', values);
    console.log('result is', values);
  }

  render() {
    return (
        <section className="registration-page">
            <Container>
                <Row>
                    <Col md={4}>
                      <div className="registration-page__header">
                        <h2 className="registration-page__header--main">Registration Form</h2>
                      <h4 className="registration-page__header--sub"> 2020/21 Membership application</h4>
                      </div>
                    </Col>
                    <Col md={8}>
                        <Form onSubmit={this.result} />
                    </Col>
                </Row>
          </Container>
        </section>
    );
  }
}

export default Registration;
