import { useTranslation } from 'react-i18next';
import Icon from '@mdi/react'
import { mdiWeb, mdiAbjadArabic, mdiAlphaEBox } from '@mdi/js'
import { useState } from 'react';
import MuiIconBtn from '../MuiIconBtn/MuiIconBtn';
import tw from 'twin.macro';
import { MuiNavMenu } from './../../Navbar/MuiNavMenu/MuiNavMenu';
import { cssVariables } from '../../../Utils/Constants/cssVariables';
import sx from 'mui-sx';

const LangIcon = ({ inNav }) => {
    const { t, i18n } = useTranslation();
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
            text: 'عـــربـــي',
            icon: mdiAbjadArabic,
            onClick: () => {
                i18n.changeLanguage('ar');
            }
        },
        {
            text: 'English',
            icon: mdiAlphaEBox,
            onClick: () => {
                i18n.changeLanguage('en');
            }
        },
    ];

    return (
        <>
            <MuiIconBtn
                tooltipTitle={t('langSetting')}
                tooltipPlacement={'bottom'}
                tooltipTw={sx(
                    tw`bg-primary-light text-white rounded-3xl py-2 px-4 shadow-md font-din text-sm`,
                    {
                        condition: inNav,
                        sx: tw`bg-primary`
                    }
                )}
                btnTw={
                    inNav && sx(
                        tw`p-2 rounded-lg  mx-1 sm:mx-4 flex items-center justify-center  transition-colors duration-300`
                        ,
                        { background: cssVariables.colors(0.4).primary }
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
                <Icon
                    path={mdiWeb}
                    title={t('langSetting')}
                    className="w-6 h-6 sm:w-8 sm:h-8 "
                    color={inNav ? cssVariables.colors().txtWhiteX :
                        cssVariables.colors().primaryToggle}
                />

            </MuiIconBtn>
            <MuiNavMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                menuItem={menuItems}
                lang={i18n.language}
            />
        </>
    )
}

export default LangIcon;