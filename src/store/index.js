import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux'

import todoApp from 'reducers'

const loggerMiddleware = createLogger()

const store = createStore(
    todoApp,
    compose(applyMiddleware(thunkMiddleware,loggerMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f),
)

export default store
