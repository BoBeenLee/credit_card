import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Prev, Next } from '../Common/index';
import './Result.scss';

const propTypes = {
  location: PropTypes.object
};

const defaultProps = {
  location: {}
};

class Result extends Component {
  componentDidMount() {}

  render() {
    const { isSuccess, user: { name, email, phoneNumber }, price: { product, price }, cardNumber } = this.props.location.result ||
    { isSuccess: false, user: { name: '', email: '', phoneNumber: '' }, price: { product: '', price: '' } };

    return (
      <div className="result">
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
      </div>
    );
  }
}

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;