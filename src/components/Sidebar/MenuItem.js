import { Fragment } from "react";
import classes from './MenuItem.module.css'
import { SidebarData } from "../Ui/Icon/Icon";


const MenuItem = (props) => {
    return(
        <Fragment>
          <div className={classes.menu}>
         {SidebarData.map((item, index) => {
             return (
                 <div className={classes.menuItem}>
                     <item.icon/>
                     <span>
                         {item.heading}
                     </span>
                 </div>
             )
         })} 
          </div>
        </Fragment>
    )
};

export default MenuItem