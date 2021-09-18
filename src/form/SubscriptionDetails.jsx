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
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium nulla culpa libero, aliquid repellat nisi necessitatibus delectus. Dolores mollitia consectetur deserunt, consequatur dolor esse totam repellat nemo culpa libero!</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae, voluptas molestiae soluta exercitationem ipsam praesentium id repellat dolor laudantium quisquam nisi porro esse enim repellendus sint. Similique, eveniet magnam!</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nam distinctio corporis tenetur maiores cupiditate.</li>
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
           
          <div style={{ paddingBottom: 30, marginTop: '30px', textAlign: 'center' }}>
            <Row>
              <Col>
                  <Button className="button-accent button-accent__opposite mb-2" onClick={previousPage} >
                    &nbsp; Previous
                </Button>
              </Col>

              <Col>
                  <Button  className="button-accent mb-2" type="submit" disabled={pristine || submitting}>
                    Register &nbsp;
                  </Button>
              </Col>
            </Row>
          </div>
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
