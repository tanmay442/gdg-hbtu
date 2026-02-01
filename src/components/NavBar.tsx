import CardNav from './CardNav/CardNav';
import { NAV_ITEMS } from '../data/constants';

const NavBar = () => {
    return (
        <CardNav
            logo="/logo.svg"
            logoAlt="GDG HBTU Logo"
            items={NAV_ITEMS}
            baseColor="#807c7c54"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
        />
    );
};


export default NavBar;