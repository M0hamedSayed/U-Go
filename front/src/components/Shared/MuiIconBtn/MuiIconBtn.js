import MuiTooltip from "../MuiTooltip/MuiTooltip"
import { IconButton } from '@mui/material';
import sx from 'mui-sx';
import { cssVariables } from "../../../Utils/Constants/cssVariables";

const MuiIconBtn = ({ children, tooltipTitle = '', tooltipPlacement = 'bottom', tooltipTw = {}, btnSize, btnTw, click }) => {
    return (
        <MuiTooltip title={tooltipTitle} placement={tooltipPlacement} css={tooltipTw}>
            <IconButton
                size={btnSize}
                sx={sx(
                    {
                        marginInlineStart: 2,
                        '&:hover': {
                            backgroundColor: cssVariables.colors(0.2).secondary
                        },
                        ...btnTw
                    }
                )}
                {...click}
            >
                {children}
            </IconButton>
        </MuiTooltip>
    )
}

export default MuiIconBtn;
