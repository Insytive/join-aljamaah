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
                      <option value="EC">Eastern Cape</option>
                      <option value="FS">Free State</option>
                      <option value="GT">Gauteng</option>
                      <option value="KZN">KwaZulu-Natal</option>
                      <option value="L">Limpopo</option>
                      <option value="MP">Mpumalanga</option>
                      <option value="NC">Northern Cape</option>
                      <option value="NW">North West</option>
                      <option value="WC">Western Cape</option>
              
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
            <FormGroup>
              <Col xs="12" lg="12">
                  <div className="d-flex mt-3">
                    {/* <Field label="Are you a first time Voter? "  id="exampleCustomInline" name="first_time_voter" component="input" type="checkbox" value={1} className="form-check-input form-check-input" /> */}
                    <Field inputPlaceHolder="Are u a first time voter"  name="first_time_voter" component={FormInput}  type="number" className="form-check-input form-check-input" />
                    
                    <Label for="first_time_voter" style={{ marginLeft: '17px'}}>Are you a first time voter?</Label>
                  </div>
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
