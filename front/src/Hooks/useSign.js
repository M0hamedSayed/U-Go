import { useCallback, useEffect } from "react"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useSign = (axiosRequest, formik) => {
    const response = useSelector((state) => state.auth.currentUser);
    const load = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const navigate = useNavigate()

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                formik.handleSubmit();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [formik]);

    const startHandleSign = useCallback(async (body) => {
        if (!load) {
            const response = await axiosRequest(body);
            const { payload } = response;
            if (payload?.data?.message) {
                if (formik)
                    formik.handleReset()
                if (payload?.redirect)
                    navigate(payload?.redirect)
            }
        }

    }, [axiosRequest, formik, navigate, load])
    return [startHandleSign, load, error, response]
}
export default useSign;