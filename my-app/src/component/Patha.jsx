
import React, { useState } from "react";

const Patha=()=>{

    const [ourfamily,setOurfamily]=useState(
        {
            son:"Odhim Dewan",
            wife:"Farhana Yasmin",
            me:"Dawn Amin Ahmed",
            daughter:"Lima dewan"

        }
    )
    return(

        <React.StrictMode>

            <header>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Your page</a></li>
                </ul>
            </header>

            <div>
               
            </div>

        </React.StrictMode>

    )
}

export default Patha;