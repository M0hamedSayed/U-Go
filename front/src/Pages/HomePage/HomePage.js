import UgoSideNav from "../../layouts/UgoSideNav/UgoSideNav";
import { useSelector } from 'react-redux';
import { css } from '@emotion/css';
import tw from 'twin.macro';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import UgoNavbar from "../../layouts/UgoNavbar/UgoNavbar";
import { MuiTheming } from "../../components/Shared/MuiTheming/MuiTheming";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    const burgerBtnStatus = useSelector((state) => state.sideNav.burgerBtnStatus);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MuiTheming>

            <div
                className={css([
                    tw` bg-primary-light`,
                    !burgerBtnStatus && tw`flex`,
                    !burgerBtnStatus && {}
                ])}
            >
                <UgoSideNav />
                <div className={css([
                    tw` flex-auto h-screen delay-300`,
                    {
                        width: '100%',
                        transition: 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',

                    }
                    , burgerBtnStatus && !isMobile && {
                        width: 'calc( 100% - 7rem)',
                        marginInlineStart: '7rem'
                    },
                ])}>
                    <UgoNavbar />
                    <Outlet />
                </div>
            </div>

        </MuiTheming>
    )
}

export default HomePage;
