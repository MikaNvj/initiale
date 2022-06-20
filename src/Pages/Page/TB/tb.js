import React from "react";
import styles from "./tb.module.css"

const Tb = ()=>{
    return(
        <>
        <div className={styles.tb}>

            <h1 className={styles.tbh1}>Gestion de Pointage</h1>
            <div className={styles.tbcont}>
                <div><h4>Pointage du</h4>
                    <p><strong>15</strong></p>
                    <h4>Juin 2022</h4>
                    <button>Voir</button>

                </div>
                <div><h4>Pointage du</h4>
                <p><strong>14</strong></p>
                <h4>Juin 2022</h4>
                <button>Voir</button>
                </div>
                <div><h4>Pointage du</h4>
                <p><strong>13</strong></p>
                <h4>Juin 2022</h4>
                <button>Voir</button>
                </div>
            </div>
            <div  className={styles.tbbottom}>
                <p>Recherchez le pointage du</p>
                <form>
                    <input type="date"/>
                    <button>Rechercher</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Tb;