import React, { useState } from 'react';
import './App.css';
import Bahalul from './component/Bahalul';
import Dhor from './component/Dhor';




function App() {

  // ALL DATA PASS TO BAHALUL COMPONENT BY PROPS FROM PERENT COMPONENT .
  
  //VARIABLE PASS TO BAHALUL COMPONENT
  const how="Hello how are you how is going everything with you and with your family"


  const[address,setAddress]=useState(
 
[{
  name:"Dawn Amin Ahmed",
  address:"Vårbergsvägen-193",
  phone:"0727710850"
 },
{
  name:"Odhim Amin Ahmed",
  address:"Vårbergsvägen-193",
  phone:"0727710850"
},
{
  name:"Shoma Amin Ahmed",
  address:"Vårbergsvägen-193",
  phone:"0727710850"
},
{
  name:"Tanha Amin Ahmed",
  address:"Vårbergsvägen-193",
  phone:"0727710850"
},]
)

// ARRAY WILL PASS TO BAHALUL COMPONENT

const [favouritfruits,setFavouritfruits]=useState(["Am","JAm","CBanan","Lichu,Kathal" ,"Amloki","Kathal","Peara"]) 


//Here i am passing data to Bahalul component in return
  return (
     <React.StrictMode>
      
       <Bahalul now={how}
        baw={address} 
        favouritfruits={favouritfruits}
        />
       <Dhor />
     </React.StrictMode>
   
  );
}

export default App;
