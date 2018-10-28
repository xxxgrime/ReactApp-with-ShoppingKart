import React from "react";
import ReactDom from "react-dom";
import { ContextConsumer } from './app'
import { Addremovebutton } from './addremovebutton'
import { Shoppingkart } from './shoppingkarts'
import { Link } from 'react-router-dom'

const Displaycontent = (props) => {


    var itemlist = [];

    var tracker = [];
    var newList = [];
    var xx;
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
            <li
                className="innerlol"
                key={i + i}
                className="collection-item">
                <div className="row" style={{ marginBottom: "5px" }}>
                    <div className="col s4 m4 l4">
                        <b>{tracker[i].name}</b>
                    </div>
                    <div className="col s4 m4 l4 offset-s4 offset-m4 offset-l4">
                        <a href="javascript:void(0)" className="secondary-content">

                            <Addremovebutton
                                style={{ float: "left" }}
                                add={props.addItem}
                                remove={props.removeItem}
                                idx={tracker[i].id}
                                value={tracker[i].price}
                                total={props.getItemTotal(tracker[i].id)} />
                        </a>
                    </div>
                </div>
            </li>
        )
    }
    var Button = (props) => {

        if (props.cart.length != 0 && (window.location.href == "http://localhost:8080/#!" || window.location.href == "http://localhost:8080/")) {
            console.log("First name")
            return (
                <ul
                    className="collection x"
                    style={{
                        marginBottom: "50px",
                        borderRadius: "20px",
                        backgroundColor: "white",
                        boxShadow: "3px 4px 10px"
                    }}>
                    <li
                        className="collection-item"
                        style={{
                            color: "black",
                            backgroundColor: "inherit",
                            textAlign: "center",
                            fontSize: "1.4em"
                        }}>
                        <Link to="/checkout" exact="true">
                            <span style={{ color: "black" }}>Proceed to Checkout</span>
                        </Link>
                    </li>
                </ul>
            )
        }
        else if (props.cart.length != 0 && window.location.href == "http://localhost:8080/checkout" && props.getFormStatus() == true) {
            console.log("second time ")
            return (
                <ul className="collection x" style={{ borderRadius: "20px", backgroundColor: "white", boxShadow: "3px 4px 10px" }}>
                    <li
                        className="collection-item"
                        style={{ color: "black", textAlign: "center", fontSize: "1.4em" }}>
                        <Link
                            to="/orderplaced" exact="true">
                            <span style={{ color: "black" }}>Place Your Order</span>
                        </Link>
                    </li>
                </ul>
            )
        }
        else {
            console.log("why")
            console.log(props.cart.length)
            console.log(window.location.href)
            return (

                <p style={{ display: "none" }}></p>
            )
        }

    }
    return (
        <div className="container">
            <p><b>List of Items</b></p>
            <div>
                <ul>
                    {itemlist}
                </ul>
            </div>
            <div className="row">
                <ul style={{ marginTop: "10px" }}>
                    <li
                        key={i + 1}
                        className="collection-item">
                        <div className="col s10 m11 l11 "><i>Service TAX</i></div>
                        <div className="col s2 m1 l1">{parseInt(props.total * 23 / 100) + "$"}
                        </div>
                    </li>
                </ul>
            </div>
            <div> <Button getFormStatus={props.getFormStatus} cart={props.cart} /></div>
            <br />


        </div>
    )
}
class DisplayBox extends React.Component {
    constructor(props) {

        super(props)
        var x = props.items;
        var status = window.innerHeight;
        this.statusHeight = window.innerHeight;
        this.statusWidth = window.innerWidth;
        var tracker = [];
        this.myRefman = React.createRef();
        this.MobRef= React.createRef()
        this.state=({display:this.props.page})
        //this.props.pageup==true?this.myRefman.current.style.top="0px":this.myRefman.current.style.top="5000px"
          console.log("pagechecker")
        console.log(this.state.display)
    }

    clickhandler(e,f) {
       
       console.log("asdad")
       // this.myRefman.current.style.top == "5000px" ? this.myRefman.current.style.top = "0px" : this.myRefman.current.style.top = null;
        this.myRefman.current.style.bottom == "5000px" ? this.myRefman.current.style.bottom = "0px" : this.myRefman.current.style.bottom = "5000px"
        this.props.changepage()
       // this.MobRef.current.innerHTML=="arrow_drop_down"?this.setState({display:"arrow_drop_up"}):this.setState({display:"arrow_drop_down"})
        // this.myRefman.current.style.display === "none" ? this.myRefman.current.style.display = "" : this.myRefman.current.style.display = "none"
    }
    componentDidMount() {
        this.props.setref(this.myRefman.current,this.MobRef.current)
    }
    render() {
        return (
            <div >
                <div
                    className="displaybox"
                    ref={this.myRefman}
                    style={{
                        position: "fixed",
                        border: "solid black 3px",
                        width: "100%",
                        zIndex: "1",
                        height: "100%",
                        background: "white",
                        overflowY: "auto",
                        bottom:"5000px"
                    }}>
                    <Displaycontent
                        clickhandler={this.clickhandler.bind(this)}
                        getFormStatus={this.props.getFormStatus}
                        addItem={this.props.addItem}
                        removeItem={this.props.removeItem}
                        total={this.props.total}
                        items={this.props.items}
                        cart={this.props.cart}
                        getItemTotal={this.props.getItemTotal}
                    />
                </div>
                <div className="row" style={{
                    position: "fixed",
                    backgroundColor: "black",
                    zIndex: "1",
                    paddingBottom: "0px",
                    marginBottom: "0px",
                    bottom: "0px",
                    width: "100%"
                }}>
                    <div
                        className="col m4 l4 s4 offset-l4 offset-m4 offset-s4"
                        style={{ border: "solid white 2px" }}>
                        <p
                            onClick={() => { this.clickhandler(this.props.total,this.props.page) }}
                            style={{ textAlign: "center" }}>
                            <i className="material-icons" ref={this.MobRef} style={{ color: "white" }}>{this.props.page}</i>
                        </p>
                    </div>
                </div>
            </div>
        )

    }
}


export const Mobkart = (props) => {
    var size = window.innerHeight;
    var size2 = window.innerWidth;
  
    return (
        <div>
            <div className="Mob" style={{ width: "100%", display: "none" }}>
                <ContextConsumer>
                    {({
                        setref,
                        getFormStatus,
                        cart,
                        addItem,
                        removeItem,
                        getItemTotal,
                        total,
                        items,
                        page,
                        changePage
                             }) =>
                        <DisplayBox
                            page={page}
                            changepage={changePage}
                            setref={setref}
                            getFormStatus={getFormStatus}
                            cart={cart}
                            addItem={addItem}
                            removeItem={removeItem}
                            getItemTotal={getItemTotal}
                            items={items} total={total}
                        />}
                </ContextConsumer>
            </div>
        </div>
    )
}
