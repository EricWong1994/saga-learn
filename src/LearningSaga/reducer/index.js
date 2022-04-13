// 当前路径：src/LearningSaga/reducer/index.js

import { combineReducers } from 'redux'

function counterReducer(state = 1, action = {}) {
    switch (action.type) {
        case "increment": return state + 1;
        default: return state
    }
}

const rootReducer = combineReducers({ counter: counterReducer })

export default rootReducer
