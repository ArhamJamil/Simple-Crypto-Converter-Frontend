import { configureStore } from '@reduxjs/toolkit'
import globalSlice from './slices/globalSlice.js'

export const store = configureStore({
  reducer: {
    global: globalSlice
  },
})