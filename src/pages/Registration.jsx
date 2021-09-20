import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/images/logo.svg';
import Form from '../form/Form';
import Footer from '../components/layout/Footer';
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
  const history = useHistory();


  const [success, setSuccess] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  
  const successMessage = () =>  toast.success("Succesfully Added!");
    
    // const result = async (values) => {
    //   await axios.post('https://app.aljama-ah.org.za/api/members', values)
    //     .then((response) => {
    //       if (response.status === 200) {
    //         setSuccess(true);
    //         history.push('/registration-success');
    //       }
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     })
    // };
 
  
  const postData = (values) => {
      

        fetch('https://app.aljama-ah.org.za/api/members', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: values,
        })
          .then(response => {
            if (response.status === 200) {
              setSuccess(true);

              setTimeout(function() {
                 history.push('/registration-success');
              }, 5003);
            }
        })
        .then(values => {
          console.log('Success:', values);
        })
        .catch((error) => {
          console.error('Error:', error);
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
                        <Form onSubmit={postData} />
                    </Col>
                  </Row>
                  
                  <Footer />
          </Container>
        </section>
    );
  }

export default Registration;
