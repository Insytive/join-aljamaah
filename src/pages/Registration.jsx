import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import Form from '../form/Form';
import Footer from '../components/layout/Footer';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Registration = () => {
  const history = useHistory();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  
  const successMessage = () =>  toast.success("Succesfully Added!");
  const errorMessage = () =>  toast.error("Something went wrong!");
    

  const result = (values) => {
    
    const payload = {
      first_name: values.first_name,
      id_number: values.id_number,
      last_name: values.last_name,
      address: values.address,
      voting_station: values.voting_station,
      ward: values.ward,
      province: values.province,
      first_time_voter: parseInt(values.first_time_voter),
      gender: parseInt(values.gender),
      district: values.district,
      surburb: values.surburb,
      metro: values.metro,
    }

    axios.post('https://app.aljama-ah.org.za/api/members', payload)
      .then(response => {
        if (response.status === 200) {
          setSuccess(true);
          history.push('/registration-success')
        }
      })
      .catch(err => {
        setError(err);
      });
  }




    return (
      <section className="registration-page">
        
         <ToastContainer>
              {success && (
               <React.Fragment>
                  {successMessage()}
               </React.Fragment>
          )};
          
          {error && (
            <React.Fragment>
              {errorMessage()}
            </React.Fragment>
          )}
        </ToastContainer>
        

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
                  
                  <Footer />
          </Container>
        </section>
    );
  }

export default Registration;
