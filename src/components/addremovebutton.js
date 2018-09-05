
import React from 'react'
import ReactDom from 'react-dom'


export const ButtonX = (props) => {

    var buttonholder;
    //var counter=this.getitemtotal(args.idx);\
    var counter = props.total;
    if (counter == 0 || counter < 0) {
        buttonholder = <span style={{ backgroundColor: "black", color: "white" }}>
            <button style={{ width: "25px", height: "25px", textAlign: "center", border: "solid black 2px" }} onClick={() => { props.add(props.idx, props.value) }}>+</button>
        </span>
    }
    else {
        buttonholder = <span style={{
            backgroundColor: "black",
            color: "white"
        }}>
            <button style={{
                width: "25px",
                height: "25px",
                textAlign: "center",
                border: "solid black 2px"
            }} onClick={() => { props.remove(props.idx, props.value) }}>-</button>
            <span className="inner" style={{
                marginRight: "3px",
                marginLeft: "3px"
            }}>{props.total}</span>
            <button style={{
                width: "25px",
                height: "25px",
                textAlign: "center",
                border: "solid black 2px"
            }}
                onClick={() => { props.add(props.idx, props.value) }}>+</button></span>
    }
    return buttonholder;
}

