// 组合子模块

import { configureStore } from '@reduxjs/toolkit'
import billReducer from './modules/billStore'
// const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
  reducer: {
    bill: billReducer,
  },
})

export default store
