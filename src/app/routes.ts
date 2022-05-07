type Routes={
    [key: string]: string
}

const routes: Routes={
    welcome: "/",
    login: "/login",
    signup: "/signup",
    main: "/main",
    quizzes: "/quizzes",
    rating: "/rating",
    wiki: "/wiki",
    settings: "/settings",
    quiz: "/quizzes/:quizId",
    result: "quizzes/:quizId/result"
}

export default routes;