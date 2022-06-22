import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import siteReducer from './site'

export default configureStore({
  reducer: {
    counter:counterReducer,
    site:siteReducer,
  }
})