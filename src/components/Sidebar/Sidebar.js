import {Fragment} from 'react'
import classes from './Sidebar.module.css';
import Logo from '../../imgs/logo.png'
import MenuItem from './MenuItem';

const Sidebar = () => {
    return (
        <Fragment>
        <div className={classes.Sidebar}>
           <div className={classes.logo}>
           <img src={Logo} alt="Shop.Png" />
            <span>
                sh<span>o</span>ps
            </span>
           </div>
           <MenuItem />
        </div>
        </Fragment>
    )
};

export default Sidebar