import { configureStore } from "@reduxjs/toolkit";
import { authReducer, profileReducer } from "../features/Auth/Redux/reducers";


const store = configureStore({
    reducer: {
        // profile: profileReducer,
        // auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})

export default store;