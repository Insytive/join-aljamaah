import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import PersonalDetails from './PersonalDetails';
import VotingDetails from './VotingDetails';
import SubscriptionDetails from './SubscriptionDetails';

class Form extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'Personal Details',},
        {title: 'Voting Details'},
        {title: 'Finishing Up'}
      ]
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (
      <div className="registration-page__card">
        <Stepper steps={ steps } activeStep={ page } activeColor={"#078745"} completeColor={"#078745"} />
        {page === 0 && <PersonalDetails onSubmit={this.nextPage} />}
        {page === 1 && (
          <VotingDetails
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <SubscriptionDetails
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
