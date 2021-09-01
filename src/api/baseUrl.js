import axios from "axios";
//import { getXsrf, removeAll } from "../localStorage";
export const baseURL = axios.create({
    baseURL: "/api",
    headers: {"Content-type": "application/json"},
    timeout: 6000,
});

baseURL.interceptors.request.use(
    function (config) {
        // if (getXsrf()) {
        //     config.headers["Content-Type"] = "application/json";
        //     config.headers["X-XSRF-TOKEN"] = getXsrf();
        // }
        return config;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

baseURL.interceptors.response.use(
    function (response) {
        const res = response.data;
        if (response.status === 200) {
            if (res.success) return response;
            return response;
        }
        // alert(response.statusText || 'Error')

        return response;
    },
    function (error) {
        // if (
        //     ["AUTH001", "AUTH002"].indexOf(error.response.data.errorCode) >= 0 &&
        //     getXsrf().length > 0
        // ) {
        //     // Alert("閒置時間過長，請重新登入!");
        //     alert(error.response.data.message);
        //     // removeXsrf();
        //     removeAll();
        //     window.location.reload();
        //     return;
        // }
        //
        // Alert(error.response.data.message, "error", 2000);
        // alert(error.response.data.message);
        return Promise.reject(error);
    }
);
