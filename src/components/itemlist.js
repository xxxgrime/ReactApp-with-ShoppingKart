import React from "react";
import ReactDOM from "react-dom";
import {ButtonX} from './addremovebutton'


export const Listofitems=(props)=>{ 
  var x=props.items
  var i=0;
  var list=[];
  while(i<props.items.length){
  
    list.push(<li style={{paddingBottom:"0px"}} key={i} className="collection-item"><div>{x[i].name}<div className="title">{x[i].comment}<a href="#!" className="secondary-content"><ButtonX add={props.addItem} remove={props.removeItem} idx={i} value={x[i].price} total={props.getitemtotal(i)}/></a><br/><span style={{marginBottom:"0px"}}>{"1"+x[i].price+" only"}</span></div></div></li>)
    i++;
  }
  return(
   <ul className="collection">{list}</ul>
  )
} 