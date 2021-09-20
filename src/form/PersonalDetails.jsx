import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput'
import {
  mobile,
  captialize,
  idNumber
} from '../validation/normalize';
import {
  Button,
  Col,
  FormGroup,
  Label,
} from 'reactstrap';


const PersonalDetails = (props) => {
  const { handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <div className="registration-page__form">
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="first_name"
                  type="text"
                  component={FormInput}
                  label="First Name(s) "
                  inputPlaceHolder="First Name *"
                  normalize={captialize}
                />
              </Col>

               <Col xs="12" lg="6">
                <Field
                  name="last_name"
                  type="text"
                  component={FormInput}
                  label="Surname"
                  inputPlaceHolder="Surname *"
                  normalize={captialize}
                />
              </Col>
            </FormGroup>

            
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  name="id_number"
                  type="text"
                  component={FormInput}
                  label="ID Number *"
                  inputPlaceHolder="ID Number"
                  normalize={idNumber}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  name="phone"
                  type="text"
                  component={FormInput}
                  label="Mobile No *"
                  inputPlaceHolder="078"
                  normalize={mobile}
                />
              </Col>
          </FormGroup>

          
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field
                  name="email"
                  type="email"
                  component={FormInput}
                  label="Email "
                  inputPlaceHolder="Email "
                  // normalize={email}
                />
              </Col>
            </FormGroup>

           <FormGroup row>
            <Col xs="12" lg="6">
              <Label for="Gender"> Gender </Label>
                  <FormGroup check className="radio">
                      <label><Field id="radio3"  name="gender" component="input" type="radio" value="Male" className="form-check-input form-check-input" /> Male</label>
                  </FormGroup>
                  <FormGroup check className="radio">
                      <label><Field id="radio3" name="gender" component="input" type="radio" value="Female" className="form-check-input form-check-input" /> Female </label>
                  </FormGroup>
              </Col>
              </FormGroup>
            
          
           <FormGroup row>
              <Field
                name="address"
                type="textarea"
                component={FormInput}
                label="Address *"
                inputPlaceHolder="Enter Address"
              />
            </FormGroup>
          
          <div style={{ paddingBottom: 30 }}>
            <Button  className="button-accent" type="submit" style={{marginRight: '20px', marginTop: '30px'}}>
               Next 
            </Button>
          </div>
        </div>
      </Col>
    </form>
  );
};

PersonalDetails.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(PersonalDetails);
