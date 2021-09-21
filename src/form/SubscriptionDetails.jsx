import React from 'react';
import PropTypes from 'prop-types';
import {  reduxForm } from 'redux-form';
import validate from '../validation/validation';

import {
  Button,
  Col,
  Row,
} from 'reactstrap';

const SubscriptionDetails = (props) => {

  const { handleSubmit, pristine, previousPage, submitting } = props;

  
  return (
    <form onSubmit={handleSubmit}>
      <Col xs="12" sm="12">
        <div className="registration-page__form">

          <Row className="registration-page__form--subscription">
              <Col xs="12" lg="12">
                <h4 className="mb-4"> Annual Membership Subscription </h4> 
                <ol>
                  <li> I understand and agree that the membership year is from 1 July 2021 to 30 June 2022. The annual  membership subscription fee is R15,00 and hat I must apply for membership each year, and at least one (1) calendar month before the expiration of my annual membership.</li>
                  <li>I understand that there are different types of memberships. I understand and agree that a card carrying member who may attend party meetings and vote. A card carrying member is a member who has paid for membership has been accepted by the working committee. A card carrying member is a memmber who has paid two year's succesive historical membership fees as well as the current year's membership fees. A card carrying member is someone whom an official membership card for the current years membership has been signed and issued by the party leader.</li>
                <li>All membership fees must be paid into the membership bank account of Al Jama-ah and a member must forwards proof of payment to the party Register/s and retain copy of such proof, which will serve the purposes of payment.</li>
                <li>I understand and agree that I have no right or entitlement to have membership renewed for the period after 30th June 2021 and that If I am a public representative, I shall cease to be such a public representative. A percentage of my salary as public representative and determined by the working committee is payable to Al Jama-ah on a monthly basis, failing which my membership may cease, upon any non-payment. I accept that as a public representative, I have the duty to enact a stop order from my salary to ensure that payments reach the bank account of Al Jama-ah timeously and every month.  </li>
                </ol>
            </Col>

            <Col xs="12" lg="6">
              <h4 className="mt-3 mb-5"> Banking Details</h4> 

              <div>
                <strong> Account Name </strong>
                Aljama
              </div>
              <div>
                <strong> Bank </strong>
                Nedbank
              </div>
              <div>
                <strong> Branch </strong>
                Howard Centre, Pinelands
              </div>
              <div>
                <strong> Account </strong>
                1202085571
              </div>
              <div>
                <strong>Type </strong>
                Business PAYU
              </div>
            </Col>
          </Row>
           
            <Row  style={{ paddingBottom: 30,  marginTop: 30, textAlign: 'center'}}>
              <Col>
                  <Button className="button-accent button-accent__opposite" onClick={previousPage} >
                     Previous
                </Button>
              </Col>

              <Col>
                  <Button  className="button-accent" type="submit" disabled={pristine || submitting}>
                    Register 
                  </Button>
              </Col>
            </Row>
        </div>
      </Col>
    </form>
  );
};

SubscriptionDetails.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  previousPage: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'wizardForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(SubscriptionDetails);
