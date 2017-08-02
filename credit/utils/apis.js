import fetch from 'axios';
import moment from 'moment';
import { SubmissionError } from 'redux-form';
import emailAuth from '../auth/email';
import paymentAuth from '../auth/payment';

export function callJsonApi(url) {
  return fetch(url);
}

export function paymentOneTime(price, user, payment) {
  const { merchantUid } = paymentAuth;
  const response = fetch.post('/subscribe/payments/onetime', {
    merchant_uid: merchantUid,
    amount: price.price,
    card_number: payment.cardNumber,
    pwd_2digit: payment.cardPassword,
    expiry: moment(payment.validatedAt).format('YYYY-MM'),
    birth: moment(payment.birthDate).format('YYYYMMDD'),
    name: price.product,
    buyer_name: user.name,
    buyer_email: user.email,
    buyer_tel: user.phoneNumber
  }).then(response => {
    if (response.data.status == 'error') {
      throw new Error(response.data.message);
    }
  });
  return response;
}

export function paymentCancel(merchantUid, reason) {
  const response = fetch.post('/payments/cancel', {
    merchant_uid: merchantUid,
    reason
  }).then(response => {
    if (response.data.status == 'error') {
      throw new Error(response.data.message);
    }
  });
  return response;
}

export function sendEmail(email, name, price) {
  const { serviceId, templateId } = emailAuth;
  const response = emailjs.send(serviceId,
      templateId,
    { reply_to: email,
      from_name: 'credit_card',
      to_name: name,
      message_html: `${price.product}, ${price.price}원 결제되었습니다` }).then(
      response => {
        console.log('EMAIL SUCCESS', response);
      },
      error => {
        console.log('EMAIL FAILED', error);
      }
  );
  return response;
}