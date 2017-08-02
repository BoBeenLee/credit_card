import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Prev, Next } from '../Common/index';
import './Result.scss';

const propTypes = {
  message: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  paymentCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const defaultProps = {
  location: {}
};

class Result extends Component {
  componentDidMount() {}

  submit = () => {
    const { merchantUid, price } = this.props.location.result;
    const { history } = this.props;
    console.log(history, merchantUid, price);
    return new Promise(
        (resolve, reject) => this.props.paymentCancel(merchantUid, 'cancel',
            resolve, reject)).then(result => {
              history.push('/refund', { price });
            });
  }

  render() {
    const { isSuccess, user: { name, email, phoneNumber }, price: { product, price }, cardNumber } = this.props.location.result ||
    { isSuccess: false, user: { name: '', email: '', phoneNumber: '' }, price: { product: '', price: '' } };
    const { message, handleSubmit } = this.props;

    return (
      <form className="result" onSubmit={ handleSubmit(this.submit) }>
        { message &&  <Alert bsStyle="danger">{message}</Alert> }
        <h3>결제 내역</h3>
        <h4>유저 정보</h4>
        <ListGroup>
          <ListGroupItem header="이름">{name}</ListGroupItem>
          <ListGroupItem header="이메일">{email}</ListGroupItem>
          <ListGroupItem header="전화번호">{phoneNumber}</ListGroupItem>
        </ListGroup>
        {
          isSuccess ? <div>
            <h4>결제 정보</h4>
            <ListGroup>
              <ListGroupItem header="상품">{product}</ListGroupItem>
              <ListGroupItem header="가격">{price}</ListGroupItem>
              <ListGroupItem header="카드번호">{cardNumber}</ListGroupItem>
            </ListGroup>
          </div> : ''
        }
        <div className="btn-box">
          <LinkContainer to="/">
            <Prev>홈</Prev>
          </LinkContainer>
          <Next type="submit" bsStyle="primary">결제취소</Next>
        </div>
      </form>
    );
  }
}

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;