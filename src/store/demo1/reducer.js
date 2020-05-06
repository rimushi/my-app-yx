// import * as login from './action-type';
let counterInit = localStorage.getItem('counterStorage') ? parseInt(localStorage.getItem('counterStorage')) : 0;

const initialState2 = {
  counter: counterInit,
};

const counterReducer =  (state = initialState2, action) => {
  switch (action.type) {   
    case 'INCREMENT':   
      localStorage.setItem('counterStorage', action.counter + 1);  
      // return Object.assign({}, state, { counter: action.counter + 1 });
      return {...state,  counter: action.counter + 1 };
    case 'DECREMENT':   
      localStorage.setItem('counterStorage', action.counter - 1);  
      //就可以直接使用Object.assign来改变属性counter的值  
      //该函数的作用是以目标对象为基础，将源对象中的内容更新到目标对象中，有则替换，无则新增
      //如果不需要改变源对象，第一个参数就置为空对象，相当于一个副本
      return Object.assign({}, state, { counter: action.counter - 1 });     
    default:
      return state
  }
}

//state可以是个字符串，也可以是个对象
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state + 1
//   case 'DECREMENT':
//     return state - 1
//   default:
//     return state
//   }
// }
export default counterReducer

