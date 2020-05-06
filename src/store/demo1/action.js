import * as login from './action-type';

// 加一
export const incrementData = (counter) => {
  return {
    type: login.INCREMENT,
    counter,
  }
}
//减一
export const decrementData = (counter) => {
  return {
    type: login.DECREMENT,
    counter,
  }
}

