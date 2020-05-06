import * as demo2 from './action-type';

// const initialState = {
//   name: '哈哈',
// };

// const demo2Data = (state = initialState, action) => {
//   switch (action.type) { 
//     case demo2.TESTSTR:
//       return Object.assign({}, state, { name: '呵呵' });
//     default:
//       return state
//   }
// }
// export default demo2Data


let strInit = localStorage.getItem('strStorage') ? localStorage.getItem('strStorage') : '';

const initialState = {
    str: strInit
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) { 
    case demo2.TESTSTR:
      localStorage.setItem('strStorage', state.str + action.data);
      return Object.assign({}, state, { str: state.str + action.data });
    default:
      return state
  }
}



// 注意和login文件夹下的reducer区分，这里action.data是固定的，state.todos是动态的

// const todosReducer = (state = '', action) => {
//   switch (action.type) {
//   case demo2.TESTSTR:
//     return state.+action.data
//   default:
//     return state
//   }
// }
export default todosReducer