
import React from 'react'
import ReactDom from 'react-dom'


export const Addremovebutton = (props) => {

    var buttonholder;
 
    var counter = props.total;


    if (counter == 0 || counter < 0) {
        buttonholder = <span style={{
            backgroundColor: "black", 
            color: "white" }}>
            <button
             className="addblock"
              style={{
                   width: "50px",
                    height: "25px",
                     textAlign: "center", 
                     border: "solid black 2px"
                     }}
                      onClick={() => {props.add(props.idx, props.value) }}>
                      <b>Add</b>
                      </button>
        </span>
    }
    else {
        buttonholder = <div style={{
            width:"inherit"
          
        }}>
            <button className="xbutton" style={{
                width: "25px",
                height:"25px",
                textAlign: "center",
                border: "solid black 1.5px",
                backgroundColor:"white",
                color:"black"
            }} onClick={(e) => { props.remove(props.idx, props.value) }}>-</button>
            <div className="inner" style={{
                display:"inline-block",
                maxWidth:"30px",
                textAlign:"center",
                color:"white"
            }}>{props.total}</div>
                <button className="xbutton" style={{
                width: "25px",
                height: "25px",
                textAlign: "center",
                border: "solid black 1.5px",
                backgroundColor:"white",
                color:"black"
        
            }}
                onClick={() => { props.add(props.idx, props.value) }}>+</button></div>



    }
    return buttonholder;
}

