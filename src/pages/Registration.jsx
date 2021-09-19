import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import axios from 'axios';
import Form from '../form/Form';


const Registration = () => {
  

  const result = (values) => {
    axios.post('https://reqres.in/api/register', values)
  }

    return (
        <section className="registration-page">
            <Container>
                <Row>
                    <Col md={4}>
                      <div className="registration-page__header">
                        <h2 className="registration-page__header--main">Registration Form</h2>
                        <h4 className="registration-page__header--sub"> 2020/21 Membership application</h4>
                      </div>

                      <div className="text-left mb-5 registration-page__logo">
                         <img src={logo} alt="Aljama Logo" height="200" />
                      </div>

                    </Col>
                    <Col md={8}>
                        <Form onSubmit={result} />
                    </Col>
                </Row>
          </Container>
        </section>
    );
  }

export default Registration;
