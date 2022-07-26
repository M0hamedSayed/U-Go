import SvgIcons from "../../Shared/SvgIcons/SvgIcons"
import sx from 'mui-sx';
import tw from "twin.macro";
import { useState } from "react";
import { mdiLockReset, mdiLogout, mdiAccountCog } from '@mdi/js'
import MuiIconBtn from "../../Shared/MuiIconBtn/MuiIconBtn";
import useI18next from './../../../Hooks/useI18next';
import { MuiNavMenu } from "../MuiNavMenu/MuiNavMenu";

const UserAvatar = () => {
    const [dir, t] = useI18next();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        {
            text: t("accountSetting"),
            icon: mdiAccountCog,
            onClick: () => { }
        }
        , {
            text: t("changePass"),
            icon: mdiLockReset,
            onClick: () => { }
        },
        {
            text: t("logOut"),
            icon: mdiLogout,
            onClick: () => { }
        },
    ];

    return (
        <>
            <MuiIconBtn
                tooltipTitle={t('changeSetting')}
                tooltipPlacement={'bottom'}
                tooltipTw={sx(tw`bg-primary text-white rounded-3xl py-2 px-4 shadow-md font-din text-sm`)}
                btnTw={
                    sx(
                        tw`rounded-full pl-2 transition-colors duration-300`,
                        { marginInlineStart: '1rem' }
                        , { condition: dir === 'ltr', sx: tw`pr-2 pl-0` }
                    )
                }
                btnSize={'small'}
                click={{
                    onClick: handleClick,
                    'aria-controls': open ? 'account-menu' : undefined,
                    'aria-haspopup': "true",
                    'aria-expanded': open ? 'true' : undefined
                }}
            >
                <div className="avatar">
                    <div className="w-10 sm:w-16 rounded-full ring ring-primary ring-offset-main ring-offset-2">
                        <SvgIcons iconName={'avatar'} sx={sx(tw`w-10 h-10 sm:w-16 sm:h-16 transition-colors duration-300`)} />
                    </div>
                </div>

                <div className='mx-4'>
                    <h3 className='font-dinBold text-primary-toggle text-sm sm:text-xl transition-colors duration-300'>{t('myName')}</h3>
                    <p className='text-whiteX transition-colors text-xs sm:text-base duration-300 w-max'>{t('myRole')}</p>
                </div>
            </MuiIconBtn>
            <MuiNavMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                menuItem={menuItems}
            />
        </>
    )
}

export default UserAvatar;
