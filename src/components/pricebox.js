import React from "react";
import ReactDOM from "react-dom";


export const Foot=(props)=>{
  var renderer;
 
  if(props.boolx==true){
      renderer=<div style={{display:"none"}}>WHAT THE FUCK</div>;
  }
   else{
      renderer=<div className="row" style={{position:"relative",bottom:"120px",padding:"0px",margin:"0px",width:"inherit"}}><div className="col s8 m8 l8"></div><div style={{padding:"0px",margin:"0px",height:"40px",backgroundColor:"white",font:"black"}} className="col s2 m2 l2"></div><div style={{padding:"0px",margin:"0px",height:"40px",backgroundColor:"red",font:"black",textAlign:"center",fontSize:"1.4em",textDecoration:"underline",color:"white"}} className="col s2 m2 l2"><span>{"$ "+props.total}</span></div></div>  
    }
    return renderer; 
  }