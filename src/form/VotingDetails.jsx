import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
// import {
//   upper,
//   aadhaar,
//   pan,
//   salary
// } from '../validation/normalize';
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

const VotingDetails = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <div className="registration-page__form">
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="voting_station"
                  type="text"
                  component={FormInput}
                  label="Voting Station *"
                  inputPlaceHolder="Voting Station"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="surburb"
                  type="text"
                  component={FormInput}
                  label="Surbub *"
                  inputPlaceHolder="Surbub"
                />
              </Col>
          </FormGroup>
          
           
          <FormGroup row>
            <Col xs="12" lg="6">
              <Label for="province"> Province</Label>
                  <Input
                    name="province"
                    type="select"
                    label="Surbub *"
                    component={FormInput}
                  
              >
                      <option disabled selected>Select Province</option>
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape</option>
                      <option value="North West">North West</option>
                      <option value="Western Cape">Western Cape</option>
                    </Input>
                </Col>
              

              <Col xs="12" lg="6">
                <Field
                  name="district"
                  type="text"
                  component={FormInput}
                  label="District"
                  inputPlaceHolder="District"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="metro"
                  type="text"
                  component={FormInput}
                  label="Metro *"
                  inputPlaceHolder="Metro"
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="ward"
                  type="text"
                  component={FormInput}
                  label="Ward *"
                  inputPlaceHolder="Ward"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="12">
                <FormGroup row>
                  <Col xs="12" lg="12">
                    <Label>Are you a first time Voter</Label>
                  </Col>
                  <Col xs="6" lg="12">
                    <FormGroup check className="radio">
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="radio1"
                        name="radios"
                        value="option1"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="radio1"
                      >
                        Yes
                      </Label>
                    </FormGroup>

                    <FormGroup check className="radio">
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="radio2"
                        name="radios"
                        value="option2"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="radio2"
                      >
                        No
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
            
            </FormGroup>
          <div style={{ paddingBottom: 30, display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <Button  className="button-accent button-accent__opposite" onClick={previousPage} style={{marginLeft: '20px'}}>
              <i className="fa fa-chevron-left" />
                &nbsp; Previous
            </Button>
            <Button className="button-accent" type="submit" style={{marginRight: '20px'}}>
               Next 
            </Button>
          </div>
        </div>
      </Col>
    </form>
  );
};

VotingDetails.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(VotingDetails);
