import React from "react";
import Styles from "./nav.module.css";
import out from "../../Components/out.png";

const Nav  =()=>{
    return(
        <>
        <div className={Styles.nav}>
            <h1 className={Styles.navh1}>Administrateur</h1>
            <img src={out} width="35px" height="45px" className={Styles.out} />
        </div>
        </>
    )
}
export default Nav;