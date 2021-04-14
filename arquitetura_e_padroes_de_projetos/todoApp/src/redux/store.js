import { createStore } from 'redux'

import { todoReducer } from './reducers/todo'

export const store = createStore(todoReducer)
