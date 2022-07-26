import { SvgIcon } from '@mui/material'

const SvgIcons = ({ iconName, sx }) => {
    return (
        <SvgIcon sx={{ ...sx }}>
            <use href={`./sprites.svg#${iconName}`} />
        </SvgIcon>
    )
}
export default SvgIcons;
