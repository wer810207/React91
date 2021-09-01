import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";

const routes = [
    {
        name: "首頁",
        path: "/",
        exact: true,
        component: Home,
    },
    {
        name: "登入頁",
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        name: "註冊頁",
        path: "/register",
        exact: true,
        component: Register,
    },
];

export default routes;
