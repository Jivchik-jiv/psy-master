import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./app/routes";
import { getUser } from "./common/AuthRedux/thunks";
import PrivateRoute from "./common/PrivateRoute";
import PublicRoute from "./common/PublicRoute";
import Login from "./features/Auth/Login/Login";
import Signup from "./features/Auth/Signup/Signup";
import Home from "./features/Home/Home";
import Layout from "./features/Layout/Layout";
import ProfileSettings from "./features/ProfileSettings/ProfileSettings";
import QuizResultView from "./features/Quizzes/QuizResultView";
import QuizView from "./features/Quizzes/QuizView";
import QuizzesListWrap from "./features/Quizzes/QuizzesListWrap";
import { auth } from "./firebaseSetup";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.displayName) {
        dispatch(getUser(user.uid));
        return;
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route
              path={routes.login}
              element={<PublicRoute component={Login} />}
            />
            <Route
              path={routes.signup}
              element={<PublicRoute component={Signup} />}
            />
            <Route
              path={routes.home}
              element={<PublicRoute component={Home} />}
            />
            <Route
              path={routes.quizzes}
              element={<PrivateRoute component={QuizzesListWrap} />}
            />
            <Route
              path={routes.settings}
              element={<PrivateRoute component={ProfileSettings} />}
            />
            <Route
              path={routes.quiz}
              element={<PrivateRoute component={QuizView} />}
            />
            <Route
              path={routes.result}
              element={<PrivateRoute component={QuizResultView} />}
            />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </Layout>
    </div>
  );
};

export default App;

// Понять дженерики и разобраться

// interface Book {
//   id: string;
//   tableOfContents: string[];
// }

// interface Movie {
//   id: number;
//   diagonal: number;
// }

// interface IItemService {
//   getItem<T extends string | number >(id: T): T extends string ? Book : Movie;
// }

// const itemService: IItemService = {
//   getItem(id){
//     if (typeof id ==="string"){
//       return {id: "", tableOfContents: [""]} as Book
//     }
//     return {id: 5, diagonal: 5} as Movie
//   },
//   test: 5
// }

// const book = itemService.getItem("5");
// const movie = itemService.getItem(5);

// type Foo =  <T extends string | number>(item: T) => T;

// const foo: Foo =(item)=>{
//   if(typeof item ==="string"){
//     return (item as string).repeat(2);
//   }
//   return (item as number) * 2;
