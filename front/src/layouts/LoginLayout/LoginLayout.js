
import { lazy, Suspense } from 'react';
import LangIcon from '../../components/Shared/LangIcon/LangIcon';
import { MuiTheming } from '../../components/Shared/MuiTheming/MuiTheming';
import ThemeToggle from '../../components/Shared/ThemeToggle/ThemeToggle';
// import LoginForm from '../../containers/Login/LoginForm';
import LoginImg from '../../containers/Login/LoginImg';
import useI18next from '../../Hooks/useI18next';
const LoginForm = lazy(() => import('../../containers/Login/LoginForm'));
const LoginLayout = () => {
    const [dir] = useI18next()

    const classes = dir === 'ltr' ? 'top-12 fixed right-8 z-50' : 'top-12 fixed left-8 z-50'

    return (

        <MuiTheming>
            <div className={`w-full h-screen bg-main relative transition-colors duration-300  overflow-hidden flex items-center justify-center `} >
                <div className={classes}>
                    <LangIcon />
                    <ThemeToggle />
                </div>
                <LoginImg />
                <div className="w-full lg:w-1/2 py-10 px-5 md:px-1 flex items-center justify-center z-10">
                    {/* <Outlet /> */}
                    <Suspense fallback={<div>loading...</div>}>
                        <LoginForm />
                    </Suspense>
                </div>
            </div>

        </MuiTheming>
    )
}
export default LoginLayout;
