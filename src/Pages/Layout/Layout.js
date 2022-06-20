import React, {useState} from "react";
import Styles from "./layout.module.css";
import logo from "../../Components/LOGO.png";
import { Routes, Route, Link } from "react-router-dom";

const Layout = ()=>{
    const[active , setActive] = useState(1);
    function clicked(init){    
        setActive(init);
    }
    return(
        <>
        <div className={Styles.dash}>
            <div>
                <img src={logo} width="180px"/>
            </div>
            <Link to="/" onClick={()=>clicked(1)} className={active===1 ? Styles.activeteste : Styles.teste}>Tableau de Bord</Link>
            <Link to="pointage" onClick={()=>clicked(2)} className={active===2 ? Styles.activeteste : Styles.teste}>Pointage</Link>
            <Link to="employees" onClick={()=>clicked(3)} className={active===3 ? Styles.activeteste : Styles.teste}>Employées</Link>
            <Link to="statistique" onClick={()=>clicked(4)} className={active===4 ? Styles.activeteste : Styles.teste}>Statistique</Link>
            <Link to="impression" onClick={()=>clicked(5)} className={active===5 ? Styles.activeteste : Styles.teste}>Impression</Link>

        </div>
        </>
    )
}
export default Layout;