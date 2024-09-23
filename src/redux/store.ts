import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'

export default configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer, //change according to api data

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})