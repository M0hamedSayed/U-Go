
import { Tooltip } from '@mui/material';
import sx from 'mui-sx';

const MuiTooltip = ({ children, title, placement, css }) => {
    return (
        <Tooltip title={title}
            placement={placement}
            componentsProps={{
                tooltip: {
                    sx: sx(css)
                },
            }}>
            {children}
        </Tooltip>
    )
}

export default MuiTooltip;
