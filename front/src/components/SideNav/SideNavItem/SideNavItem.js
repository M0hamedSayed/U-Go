
import { css } from '@emotion/css';
import tw from 'twin.macro';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import MuiIconBtn from './../../Shared/MuiIconBtn/MuiIconBtn';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { cssVariables } from '../../../Utils/Constants/cssVariables';
import sx from 'mui-sx';
// import { useState } from 'react';
export const SideNavItem = ({ checkNavOpened, iconName, itemName, navigateTarget }) => {
    const { t } = useTranslation();
    // const [isActive, setIsActive] = useState(false);

    return (
        <li >
            <NavLink
                className={css([
                    tw`flex bg-transparent items-center my-2 w-auto px-5 py-2`,
                    checkNavOpened && tw`justify-start`
                ])}
                to={navigateTarget}
                style={({ isActive }) => {
                    // setIsActive(isActive);
                    return {
                        color: isActive
                            ? cssVariables.colors().txtSecondaryLight
                            : cssVariables.colors().txtMain
                    }
                }}
            >

                <MuiIconBtn
                    btnTw={sx(
                        tw`rounded-xl p-2 w-full mx-2`,
                        {
                            color: 'inherit',
                            width: "90%"
                        }
                    )}
                    btnSize='small'
                    click={{
                        'aria-label': { itemName },
                        onClick: () => { }
                    }}
                >
                    <SvgIcons
                        iconName={iconName}
                        sx={sx(
                            tw`m-auto text-center w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300`
                        )}
                    />
                    <h2
                        className={css([
                            tw` overflow-hidden text-lg sm:text-xl  flex-1 p-0 whitespace-nowrap font-dinBold  transition duration-300`,
                            {
                                transition: cssVariables.transitions.transitionAll,
                                color: 'inherit',
                                textAlign: 'start'
                            },
                            checkNavOpened && tw`py-0 px-6`,
                            checkNavOpened && { textIndent: '0px' },
                            !checkNavOpened && { textIndent: '-300px', width: '0px' },
                        ])}
                    >{t(itemName)}</h2>
                </MuiIconBtn>
            </NavLink>
        </li>
    )
}
