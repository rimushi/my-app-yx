import * as demo2 from './action-type';
// import axios from 'axios'


export const demo2Date = (data) => {
  return {
    type: demo2.TESTSTR,
    data,
  }
}
export const axioDate = (data) => {
	return (dispatch) => {
	   //可以接受到dispatch这个参数
		// axios.get('/list.json').then((res) => {
		// 	const data = res.data;			
		// 	const action = demo2Date(data)
		// 	dispatch(action);
		// })
	}
}
