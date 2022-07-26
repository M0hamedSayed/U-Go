import sx from 'mui-sx';
import tw from 'twin.macro';

const drawerSx = (checkNavOpened, cssVariables, dir, isMobile) => (sx(
    tw`w-28 relative`,
    {
        transition: cssVariables.transitions.transitionBg + ' , ' + cssVariables.transitions.transitionIn
    },
    {
        '& .MuiDrawer-paper': sx(
            tw`justify-start overflow-x-hidden bg-primary shadow-xl p-0 w-28`
            , {
                transition: cssVariables.transitions.transitionBg + ' , ' + cssVariables.transitions.transitionIn
            },
            {

                condition: checkNavOpened,
                sx: tw`w-72 `
            },
            {
                condition: checkNavOpened && isMobile,
                sx: tw`w-64`
            },
            {
                condition: (dir === 'ltr'),
                sx: tw`rounded-tr-3xl`
            },
            {
                condition: (dir === 'rtl'),
                sx: tw`rounded-tl-3xl`
            }
        )
    },
    {
        condition: checkNavOpened,
        sx: tw`w-72 `
    },
    {
        condition: checkNavOpened && isMobile,
        sx: tw`w-64`
    },
    {
        condition: (dir === 'ltr'),
        sx: tw`rounded-tr-3xl`
    },
    {
        condition: (dir === 'rtl'),
        sx: tw`rounded-tl-3xl`
    }
));

export default drawerSx;