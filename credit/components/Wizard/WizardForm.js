import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Detail from '../../containers/Detail/DetailContainer';
import User from '../../containers/User/UserContainer';
import Payment from '../../containers/Payment/PaymentContainer';

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div>
        {page === 1 &&
          <Detail
            onSubmit={ this.nextPage }
            { ...this.props } />}
        {page === 2 &&
          <User
            previousPage={ this.previousPage }
            onSubmit={ this.nextPage }
            { ...this.props } />}
        {page === 3 &&
          <Payment
            previousPage={ this.previousPage }
            { ...this.props } />}
      </div>
    );
  }
}

WizardForm.propTypes = {
};

export default WizardForm;