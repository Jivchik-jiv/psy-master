type Routes={
    [key: string]: string
}

const routes: Routes={
    home: "/",
    login: "/login",
    signup: "/signup",
    quizzes: "/quizzes",
    settings: "/settings",
    quiz: "/quizzes/:quizId",
    result: "quizzes/:quizId/result"
}

export default routes;