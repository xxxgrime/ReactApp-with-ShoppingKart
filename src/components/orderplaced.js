import React from 'react'
import ReactDom from 'react-dom'


export class Orderplaced extends React.Component{
    constructor(props){
        super(props)
        this.state=({page:true})
    }
    componentDidMount(){
    var x=this.props.getref()
     x.style.bottom == "5000px" ?x.style.bottom = "0px" : x.style.bottom = "5000px"
    this.props.reset();
    }
    render(){
        return(
            <div>
            <Confirmbanner/>
            </div>
        )
    }
}

const Confirmbanner=(props)=>{
    return(
        <div
         style={{
             paddingBottom:"200px",
             textAlign:"center",
             border:"solid black 2px",
             background:"white"
             }}>
             <h1>Your Order Has been Placed !!! </h1>
        <p style={{textAlign:"center"}}>Thanx for shopping with us XO XO</p></div>
        
    )
} 