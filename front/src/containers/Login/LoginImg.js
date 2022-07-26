import { css } from '@emotion/css';
import SvgLogin from '../../components/Login/SvgLogin';
import bgLogin from '../../assets/images/bg-auth.png';
import manLogin from '../../assets/images/man-auth.png';
import useI18next from '../../Hooks/useI18next';
import useProgressiveImage from './../../Hooks/useProgressiveImage';


const LoginImg = () => {
    const [dir] = useI18next();
    const loadedBgLogin = useProgressiveImage(bgLogin);
    const loadedManLogin = useProgressiveImage(manLogin);
    const rotate = dir === 'ltr' ? 'rotateY(0deg)' : 'rotateY(180deg)';

    const main_register = css`
        background-image: url(${loadedManLogin || manLogin});
        background-size: contain;
        background-repeat: no-repeat;
    `
    const container_signLeft = css`
    background-image: url(${loadedBgLogin || bgLogin});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transform:${rotate};
    `

    return (
        <section className={`${container_signLeft}  hidden lg:flex w-3/5 h-screen justify-center items-center py-14 px-14 relative`}>
            <div className='absolute -right-8 w-40 h-60'>
                <div className={`${main_register} w-full h-full`} ></div>
            </div>
            <SvgLogin />
        </section>
    );
}
export default LoginImg;