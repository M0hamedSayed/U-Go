import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cssVariables } from '../../../Utils/Constants/cssVariables';

let theme = createTheme(

    {
        typography: {
            fontFamily: cssVariables.fonts.regularDin,
            fontSize: 16,
            transition: cssVariables.transitions.transitionColor,
            body1: {
                fontSize: '14px',
                '@media(min-width:600px)': {
                    fontSize: '16px',
                },
            }
        }
    })



export const MuiTheming = ({ children }) => {

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
