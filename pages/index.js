// 当前路径：src/index.js

// 第三方模块引入
import React from 'react'  
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// 自定义模块引入
// 1，redux中的 reducer引入
import rootReducer from '../src/LearningSaga/reducer'
// // 2，react中 Counter组件引入
import Counter from '../src/LearningSaga/component'
// // 3， redux-saga中间件的 saga文件引入
import rootSaga from '../src/LearningSaga/saga'

// // 4，创建一个redux-saga中间件
const sagaMiddleware = createSagaMiddleware()
// // 5，将redux-saga中间件加入到redux中
const store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware))
// // 6，动态的运行saga，注意 sagaMiddleware.run(rootSaga) 只能在applyMiddleware(sagaMiddleware)之后进行
sagaMiddleware.run(rootSaga)

// 7，挂载react组件
ReactDom.render(
<Provider store={store}><Counter /></Provider>,
document.getElementById('root')
)

