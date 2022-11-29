import axios from "axios";
import { alertConfig } from "../../Services/sweetAlert";
import { handleError } from "../../Store/Slices/authSlice";
import store from "../../Store/store";
const axiosAuth = axios.create({
    baseURL: process.env.BASE_URL_BACK ||
        // "https://localhost:5000" ||
        "https://genom-u-go.herokuapp.com/auth/",
});
//errorHandling(error.response.data.Error)
axiosAuth.interceptors.request.use(
    function (config) {
        return config;
    },
    async function (error) {
        await alertConfig("", () => {
            store.dispatch(handleError('Something is wrong, Please try again'));
        }).fire({
            icon: "warning",
            title: 'Something is wrong, Please try again',
            position: "center",
        });
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosAuth.interceptors.response.use(
    async function (response) {
        await alertConfig(true).fire({
            icon: "success",
            title: response.data?.message,
            position: "top-start",
        });
        return response;
    },
    async function (error) {

        await alertConfig(
            "",
            () => {
                store.dispatch(handleError(error.response?.data?.Error || error.message));
            }
        ).fire({
            icon: "warning",
            title: error.response?.data?.Error || error.message,
            position: "center",
        });
        return Promise.reject(error);
    }
);


export default axiosAuth;