import { styled } from '@mui/material/styles';
import { cssVariables } from '../../../Utils/Constants/cssVariables';

const loginInputStyle = (input) => (styled(input)({
    '& label': {
        color: cssVariables.colors().txtPrimaryLight,
        fontWeight: 'bold',
        fontSize: "16px"
    },
    '& label.Mui-focused': {
        color: `${cssVariables.colors().txtPrimaryLight}`,
        fontWeight: 'bold'
    },
    '& .MuiOutlinedInput-root input': {
        padding: '11px 2px',
        color: `${cssVariables.colors().txtDark}`
    },
    '& label.Mui-error': {
        color: cssVariables.colors().error,
    },
    '& p.Mui-error': {
        color: cssVariables.colors().error,
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: `${cssVariables.colors().bgWhite}`,
        borderRadius: '15px',
        '& fieldset': {
            boxShadow: `0px -5px 5px ${cssVariables.colors(0.7).bgWhite}`,
            borderRadius: "15px",
            borderLeftWidth: 6,
            borderRightWidth: 6,
            padding: '8px !important',
            transition: '0.3s',
            borderColor: `${cssVariables.colors().bgPrimaryLight}`,

        },
        '& svg': {
            color: cssVariables.colors().bgPrimaryLight,
        },
        '&:hover fieldset': {
            borderColor: `${cssVariables.colors().bgPrimary}`,
        },
        '&.Mui-focused fieldset': {
            borderColor: `${cssVariables.colors().bgPrimary}`,
        },
        '&.Mui-error fieldset': {
            borderColor: cssVariables.colors().error,
        },
        '&.Mui-focused svg': {
            color: `${cssVariables.colors().bgPrimary} !important`,
            transform: 'rotate(360deg)',
            transformOrigin: 'center center',
            transition: '0.8s'
        },
        '&.Mui-error  svg': {
            color: cssVariables.colors().error,
        },
    },
})
);
export default loginInputStyle;