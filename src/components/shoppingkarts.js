
import React from 'react'
import ReactDom from 'react-dom'
import { ButtonX } from './addremovebutton'
export const ShoppingKart = (props) => {
    var i = 0;
    var itemlist = [];
    var x = props.items;


  while (i < props.selected.length) {
    if (props.selected[i] != 0) {
      itemlist.push(<li key={40 + i} className="collection-item"><div>{x[i].name}<a href="#!" className="secondary-content"><ButtonX add={props.addItem} remove={props.removeItem} idx={i} value={x[i].price} total={props.getitemtotal(i)} /></a></div></li>)
    }
    i++;
  }
  if (itemlist.length != 0) { itemlist.push(<li key={itemlist.length} className="collection-item"><div>Service TAX<a href="#!" className="secondary-content">{parseInt(props.total * 23 / 100) + "$"}</a></div></li>) }

  var Button = (props) => {
    if (props.page == false) {
      return (
        <ul className="collection x" style={{ borderRadius: "20px", backgroundColor: "red", boxShadow: "3px 4px 10px" }}>
          <li className="collection-item" style={{ backgroundColor: "inherit", textAlign: "center", fontSize: "1.4em" }}>Go Shopping Kart</li>
        </ul>
      )
    }
    else if (props.page == true && props.completed == true) {
      return (
        <ul className="collection x" style={{ borderRadius: "20px", backgroundColor: "red", boxShadow: "3px 4px 10px" }}>
          <li className="collection-item" style={{ backgroundColor: "inherit", textAlign: "center", fontSize: "1.4em" }}>Place Your Order</li>
        </ul>
      )
    }
    else {
      return (
        <p style={{ display: "none" }}></p>
      )
    }
  }
  return (
    <div className="x">
      <ul className="collection x" style={{ minHeight: "300px" }} >
        <li className="collection-header"><h4 style={{ textAlign: "center" }}>Shoppingkart</h4></li>
        {itemlist}
      </ul>
      <ul className="collection x" >
        <li className="collection-item"><div style={{ textAlign: "left" }}>Total Pricing<span style={{ textAlign: "right", float: "right" }}>{props.total + parseInt(props.total * 23 / 100)}$</span></div></li>
      </ul>
      <Button completed={props.completed} page={props.page} />
    </div>
  )
}
