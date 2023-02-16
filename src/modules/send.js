/* eslint-disable import/no-named-as-default */
import { url2 } from './url.js';

const send = async (mealobj) => {
  await fetch(url2, {
    method: 'POST',
    body: JSON.stringify(mealobj),
    headers: { 'Content-Type': 'application/json' },
  });
  return send;
};
export default send;