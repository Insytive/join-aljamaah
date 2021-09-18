import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../validation/validation';
import FormInput from '../components/FormInput';
import Select from 'react-select';
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
  const [province, setProvince] = useState("")

  const handleSelect = (e) => {
    setProvince(e.target.value);
    console.log(province);
  }


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
                      <option value="Eastern Cape">Eastern Cape</option>
                      <option value="Free State">Free State</option>
                      <option value="Gauteng">Gauteng</option>
                      <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                      <option value="Limpopo">Limpopo</option>
                      <option value="Mpumalanga">Mpumalanga</option>
                      <option value="Northern Cape">Northern Cape</option>
                      <option value="North West">North West</option>
                      <option value="Western Cape">Western Cape</option>
              
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
                      <label><Field id="radio2"  name="voter" component="input" type="radio" value="Yes" className="form-check-input form-check-input" /> Yes</label>
                  </FormGroup>
                  <FormGroup check className="radio">
                      <label><Field id="radio2" name="voter" component="input" type="radio" value="No" className="form-check-input form-check-input" /> No </label>
                  </FormGroup>
                  </Col>
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
