import { useDispatch } from 'react-redux';
import { css } from '@emotion/css';
import tw from 'twin.macro';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useEffect, useRef } from "react";
import { burgerBtnClicked, closeNav, resetNav } from '../../Store/Slices/sideNavSlice';
import { cssVariables } from './../../Utils/Constants/cssVariables';
import LangIcon from '../../components/Shared/LangIcon/LangIcon';
import ThemeToggle from '../../components/Shared/ThemeToggle/ThemeToggle';
import UserAvatar from '../../components/Navbar/UserAvatar/UserAvatar';

const UgoNavbar = () => {
    const dispatch = useDispatch();
    const burgerBtn = useRef();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

    useEffect(() => {
        if (isTablet) {
            burgerBtn.current.checked = !isTablet;
            dispatch(closeNav())
        } else {
            burgerBtn.current.checked = isTablet;
            dispatch(resetNav())
        }
    }, [isMobile, isTablet, dispatch])

    return (
        <>
            <div className='w-full h-24 flex items-center justify-between'>
                <div className='flex items-center'>
                    <label
                        className={
                            css([
                                tw`p-2 rounded-lg flex items-center justify-center swap swap-rotate text-white transition-colors duration-300`
                                , {
                                    marginInlineStart: '1rem',
                                    background: cssVariables.colors(0.4).primary,
                                    '&:hover': { background: cssVariables.colors(0.2).secondary }
                                },
                                isTablet && !isMobile && tw`hidden`
                            ])} >
                        <input type="checkbox"
                            ref={burgerBtn}
                            onClick={(e) => {
                                if (isMobile) e.target.checked = !isMobile;
                                dispatch(burgerBtnClicked(isMobile))
                            }} />
                        <svg className="swap-off fill-current w-6 h-6  sm:w-8 sm:h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        <svg className="swap-on fill-current w-6 h-6  sm:w-8 sm:h-8" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>

                    <UserAvatar />

                </div>
                <div className='flex mx-3'>
                    <LangIcon inNav={true} />
                    <ThemeToggle inNav={true} />
                </div>
            </div>
        </>
    )
}
export default UgoNavbar;
