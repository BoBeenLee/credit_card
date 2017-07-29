import fetch from 'axios';

export function callJsonApi(url) {
  return fetch(url);
}