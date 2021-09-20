import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import {
  Button,
  Col,
  FormGroup,
  Label,
  Row
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
              <Label for="Province">Province</Label>
                  <Field
                    name="provice"
                    type="select"
                    component="select"
                    className="form-control"
                  >
                
                      <option defaultValue="province" disabled>Select Province</option>
                      <option value={0}>Eastern Cape</option>
                      <option value={1}>Free State</option>
                      <option value={2}>Gauteng</option>
                      <option value={3}>KwaZulu-Natal</option>
                      <option value={4}>Limpopo</option>
                      <option value={5}>Mpumalanga</option>
                      <option value={6}>Northern Cape</option>
                      <option value={7}>North West</option>
                      <option value={4}>Western Cape</option>
              
                    </Field>
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
                  <Col xs="12" lg="12">
                  <Label for="voter">Are you a first time Voter? </Label>
                
                  <FormGroup check className="radio">
                      <label><Field id="radio2"  name="first_time_voter" component="input" type="radio" value={1} className="form-check-input form-check-input" /> Yes</label>
                  </FormGroup>
                  <FormGroup check className="radio">
                      <label><Field id="radio2" name="first_time_voter" component="input" type="radio" value={0} className="form-check-input form-check-input" /> No </label>
                  </FormGroup>
                  </Col>
              </Col>
            
          </FormGroup>
          
          <Row style={{ paddingBottom: 30,  marginTop: 30, textAlign: 'center'}}>
            <Col>
              <Button  className="button-accent button-accent__opposite" onClick={previousPage}>
                   Previous
             </Button>
            </Col>
            <Col>
              <Button className="button-accent" type="submit" >
               Next 
            </Button>
            </Col>
          </Row>
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
