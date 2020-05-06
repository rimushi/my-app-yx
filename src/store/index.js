// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createStore, combineReducers } from 'redux';
// import thunk from 'redux-thunk'

//备注如果引用的模块有exploer default 则氪直接赋给一个值，
// 如果没有default则需要罗列出来引用了那些， 如果引用全部则 * as 新名字
import demo1Reducer  from './demo1/reducer';
import demo2Reducer from './demo2/reducer';


let store = createStore(
	// 在这里如果简写需要属性名和文件名同名，否则则需要标出清楚哪个属性对应那个文件
	// 备注加了combineReducers是会加一个外层的对象
	// 这一步是把多个reducer合并
	combineReducers({
		demo1: demo1Reducer,
		demo2:demo2Reducer
	}),	
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),	
    // applyMiddleware(thunk)
);

console.log(store.getState());

export default store;