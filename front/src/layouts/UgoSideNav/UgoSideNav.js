
import useI18next from './../../Hooks/useI18next';
import { CssBaseline, IconButton, SwipeableDrawer, useMediaQuery } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import tw from 'twin.macro';
import { useRef } from 'react';
import useSideNav from '../../Hooks/useSideNav';
import { cssVariables } from '../../Utils/Constants/cssVariables';
import sx from 'mui-sx';
import drawerSx from './drawerSx';
import logo from '../../assets/images/logo-white.png';
import logoFull from '../../assets/images/ugo-white.png';
import sideNavData from './sideNavData';
import { SideNavItem } from '../../components/SideNav/SideNavItem/SideNavItem';
import { css } from '@emotion/css';

const UgoSideNav = () => {
    const [dir] = useI18next();
    const theme = useTheme();
    const drawer = useRef();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    // const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
    const [checkNavOpened, burgerBtnClicked, sideNavPosition, toggleDrawer] = useSideNav(drawer);
    const customDrawerSx = drawerSx(checkNavOpened, cssVariables, dir, isMobile);

    return (
        <>
            <CssBaseline />
            <SwipeableDrawer
                ref={drawer}
                swipeAreaWidth={20}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true
                }}
                anchor={sideNavPosition}
                variant={isMobile ? "temporary" : "permanent"}
                open={checkNavOpened}
                sx={customDrawerSx}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                onMouseLeave={(isMobile || !burgerBtnClicked) ? () => { } : toggleDrawer(false)}
                onMouseOver={(isMobile || !burgerBtnClicked) ? () => { } : toggleDrawer(true)}

            >
                <div className={css([
                    tw`px-4 fixed top-0 z-50`,
                    { width: 'inherit' }
                ])}>
                    <div className={css([
                        tw`bg-primary w-full py-4 `
                        , {
                            borderBottom: `2px solid ${cssVariables.colors().bgMain}`
                        }
                    ])}>
                        <IconButton
                            aria-label='logo'
                            sx={sx(
                                checkNavOpened && { background: `url(${logoFull}),${cssVariables.colors().primary}`, height: '7.5rem' },
                                !checkNavOpened && {
                                    background: `url(${logo}),${cssVariables.colors().primary}`,
                                    height: '3rem',
                                    marginTop: '1rem'
                                },
                                tw`rounded-none bg-no-repeat`,
                                {
                                    "&:hover": { bgcolor: cssVariables.colors().primary },
                                    width: "90%",
                                    marginInlineStart: '5%',
                                    backgroundSize: '100% auto',
                                },
                            )}
                        >
                            {/* <img className='drop-shadow-2xl drop shadow-secondary' src={logo} alt='logo' width='100%' height='auto' /> */}
                        </IconButton>
                    </div>
                </div>
                <ul className={css([
                    { paddingTop: '3rem' },
                    checkNavOpened && { marginTop: "7.5rem" },
                    !checkNavOpened && { marginTop: "3rem" }
                ])}>
                    {sideNavData.map((item, id) => {

                        return (
                            <SideNavItem
                                key={`ugoSideNav-${id}`}
                                checkNavOpened={checkNavOpened}
                                iconName={item.iconName}
                                itemName={item.itemName}
                                navigateTarget={item.target}

                            />
                        );

                    })}
                </ul>
                {/* <div className='shadow-md justify-start overflow-x-hidden bg-primary p-0'></div> */}
            </SwipeableDrawer >
        </>

    )
}

export default UgoSideNav;
