
import React from 'react'
import ReactDom from 'react-dom'
import { Addremovebutton } from './addremovebutton'
import { Link } from 'react-router-dom'


export const Shoppingkart = (props) => {
  var itemlist = [];
  var x = props.items;
  var status;
  window.innerHeight <= 600 ? status = true : status = false;
  var tracker = [];

  (function () {
    for (var i = 0; i < props.cart.length; i++) {

      for (var x = 0; x < props.items.length; x++) {

        if (props.cart[i] == props.items[x].id) {

          tracker.push(props.items[x])
        }
      }
    }
  })()

  for (var i = 0; i < props.cart.length && props.cart.length != 0; i++) {
    itemlist.push(
      <li key={40 + i}
        style={{ border: "none" }}
        className="collection-item ">
        <div>
          <b>{tracker[i].name}</b>
          <a href="javascript:void(0)" className="secondary-content">
            <Addremovebutton
              add={props.addItem}
              remove={props.removeItem}
              idx={tracker[i].id}
              value={tracker[i].price}
              total={props.getItemTotal(tracker[i].id)} />
          </a>
        </div>
      </li>
    )

  }
  if (itemlist.length != 0) {
    itemlist.push(
      <li key={i + 1} className="collection-item" style={{ marginBottom: "20px" }}>
        <div className="col s10 m11 l11 "><i>Service TAX</i></div><div className="col s2 m1 l1">{parseInt(props.total * 23 / 100) + "$"}</div></li>)
  }

  var Button = (props) => {

    if (props.total != 0 && (window.location.href == "http://localhost:8080/#!" || window.location.href == "http://localhost:8080/")) {
      return (
         <Link to="/checkout" exact="true">
        <ul
          className="collection x collection-x"
          style={{
            borderRadius: "30px",
            backgroundColor: "white",
            boxShadow: "3px 4px 10px"
          }}>
          <li
            className="collection-itemx"
            style={{
              color: "black",
              backgroundColor: "inherit",
              textAlign: "center",
              fontSize: "1.4em"
            }}>
           
              <span style={{ color: "black" }}>Proceed to Checkout</span>
           
          </li>
        </ul>
         </Link>
      )
    }
    else if (props.getFormStatus() == true && props.total != 0) {
      return (
        <Link to="/orderplaced" exact="true">
        <ul className="collection x collection-x" style={{ borderRadius: "30px", backgroundColor: "white", boxShadow: "3px 4px 10px" }}>
          <li
            className="collection-itemx"
            style={{
              backgroundColor: "inherit",
              textAlign: "center",
              fontSize: "1.4em"
            }}>
            
              <span style={{ color: "black" }}>Place Your Order</span>
        
          </li>
        </ul>
            </Link>
      )
    }
    else {
      return (
        <p style={{ display: "none" }}></p>
      )
    }
  }

  return (

    <div className="ShoppingKart">
      <div>
        <ul
          className="collection x"
          style={{
            border: "solid black 1px",
            borderBottom: "solid black 2px",
            minHeight: "400px",
            maxHeight: "400px",
            overflowY: "auto"
          }} >
          <li className="collection-header">
            <h4
              style={{
                textAlign: "center",
                fontSize: "1em"
              }}>Shoppingkart</h4>
          </li>
          {itemlist}
        </ul>
      </div>
      <ul className="collection x"
        style={{
          border: "solid 1px black",
          borderBottom: "solid 2px black"
        }} >
        <li className="collection-item">
          <div style={{ textAlign: "left" }}>
            <b>Total Pricing</b>
            <span
              style={{
                textAlign: "right",
                float: "right"
              }}>
              <i>
                <b>{props.total + parseInt(props.total * 23 / 100)}$</b>
              </i>
            </span>
          </div>
        </li>
      </ul>
      <Button
        getFormStatus={props.getFormStatus}
        total={props.total}
        page={props.page}
        completed={props.completed}
      />
    </div>
  )
}

