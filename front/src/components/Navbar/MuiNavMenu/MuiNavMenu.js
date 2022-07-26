import { CssBaseline, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material"
import { Icon } from '@mdi/react';
import sx from "mui-sx";
import { cssVariables } from "../../../Utils/Constants/cssVariables";

export const MuiNavMenu = ({ anchorEl, open, handleClose, menuItem, lang }) => {
    return (
        <>
            <CssBaseline />
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                sx={{ bgcolor: cssVariables.colors(0.1).backdrop }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: `drop-shadow(0px 2px 8px ${cssVariables.colors(0.4).primary})`,
                        borderRadius: '1rem',
                        bgcolor: cssVariables.colors().bgWhite,
                        padding: 0,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            left: '50%',
                            top: '0%',
                            width: 30,
                            height: 30,
                            bgcolor: cssVariables.colors().bgWhite,
                            transform: 'translate(-50%,-20%) rotate(-45deg)',
                            zIndex: 0,
                            borderRadius: '0 8px',
                        },
                        "& .MuiMenuItem-root": {
                            minHeight: 'auto'
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
            >
                {menuItem.map((item, index) => (
                    <MenuItem
                        key={item + '' + index}
                        onClick={item.onClick}
                        sx={
                            sx({
                                borderRadius: 1.5,
                                backgroundColor:
                                    lang === "ar" && item.text === 'عـــربـــي' ?
                                        cssVariables.colors(0.3).primary
                                        : lang === "en" && item.text === 'English' ?
                                            cssVariables.colors(0.3).primary
                                            : cssVariables.colors().bgWhite
                            })
                        }>
                        <ListItemIcon>
                            <Icon path={item.icon}
                                title="AR"
                                size={'1.5rem'}
                                color={cssVariables.colors().txtPrimaryLight} />
                        </ListItemIcon>
                        <Typography color={cssVariables.colors().txtPrimaryLight}>
                            {item.text}
                        </Typography>
                    </MenuItem>
                ))}
                {/* <MenuItem
                    onClick={menuItem[0].onClick}
                    sx={
                        sx({
                            borderRadius: 1.5,
                            backgroundColor: () => lang === "ar" ?
                                cssVariables.colors(0.3).primary
                                : cssVariables.colors().bgWhite
                        })
                    }>
                    <ListItemIcon>
                        <Icon path={menuItem[0].icon}
                            title="AR"
                            size={'1.5rem'}
                            color={cssVariables.colors().txtPrimaryLight} />
                    </ListItemIcon>
                    <Typography color={cssVariables.colors().txtPrimaryLight}>
                        {menuItem[0].text}
                    </Typography>
                </MenuItem>
                <MenuItem
                    onClick={menuItem[1].onClick}
                    sx={
                        sx({
                            borderRadius: 1.5,
                            backgroundColor: () => lang === "en" ?
                                cssVariables.colors(0.3).bgSecondary
                                : cssVariables.colors().bgWhite
                        })
                    }
                >
                    <ListItemIcon>
                        <Icon
                            path={menuItem[1].icon}
                            title="EN"
                            size={'1.5rem'}
                            color={cssVariables.colors().txtPrimaryLight} />
                    </ListItemIcon>
                    <Typography color={cssVariables.colors().txtPrimaryLight}>
                        {menuItem[1].text}
                    </Typography>
                </MenuItem> */}

            </Menu>
        </>
    )
}
