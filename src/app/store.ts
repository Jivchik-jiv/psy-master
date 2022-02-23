import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../common/AuthRedux/reducers";
import { QuizRootReducer } from "../features/Quizzes/QuizRedux/reducers";



const store = configureStore({
    reducer: {
      quiz: QuizRootReducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;