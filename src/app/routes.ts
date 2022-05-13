type Routes={
    [key: string]: string
}

const routes: Routes={
    welcome: "/psy-master",
    login: "/psy-master/login",
    signup: "/psy-master/signup",
    main: "/psy-master/main",
    quizzes: "/psy-master/quizzes",
    rating: "/psy-master/rating",
    wiki: "/psy-master/wiki",
    settings: "/psy-master/settings",
    quiz: "/psy-master/quizzes/:quizId",
    result: "/psy-masterquizzes/:quizId/result"
}

export default routes;