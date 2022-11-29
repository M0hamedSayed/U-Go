import useI18next from "./useI18next";
import { useSelector, useDispatch } from 'react-redux';
import { sideNavToggle } from "../Store/Slices/sideNavSlice";

const useSideNav = (drawer) => {
    const dispatch = useDispatch();
    const [dir] = useI18next();
    const checkNavOpened = useSelector((state) => state.sideNav.sideNavStatus);
    const burgerBtnClicked = useSelector((state) => state.sideNav.burgerBtnStatus);

    //handle position of side nav in ar or eng
    const sideNavPosition = dir === 'ltr' ? "left" : "right";

    // handle hover
    const toggleDrawer = (checkOpen) => () => {
        if (!checkOpen) {
            drawer.current.children[0].scrollTo({ top: 0, behavior: 'smooth' });
        }
        dispatch(sideNavToggle(checkOpen))
    }

    return [checkNavOpened, burgerBtnClicked, sideNavPosition, toggleDrawer]
}

export default useSideNav;