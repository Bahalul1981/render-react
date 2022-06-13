
import React from "react";

const Bahalul=(props)=>{

    const newford=props.favouritfruits
    return(
    <>
    <h3>{props.now}</h3>

     {newford.map((newmyFavouritfruits,ftu)=>(<li key={ftu}>{newmyFavouritfruits}<br></br></li>))} 
    <h4>{props.baw.map((newbaw,index)=>(<p key={index}> Name: {newbaw.name} <br></br> {newbaw.address} <br></br> {newbaw.phone} <hr></hr></p>))}</h4>
    </>
    )
}

export default Bahalul;