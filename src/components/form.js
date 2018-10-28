import React from 'react'
import ReactDom from 'react-dom'
import { AppProvider, ContextConsumer } from './app'
import { Shoppingkart } from './shoppingkarts'
import M from '../materialize.min.js'


class FormBody extends React.Component {
    constructor(props) {
        super(props)
        this.Firstname = React.createRef();//FirstName
        this.Lastname = React.createRef();//LastName
        this.State = React.createRef();//State
        this.PhoneNumber = React.createRef();//PhoneNumber
        this.Email = React.createRef();//Email
        this.stateouter = React.createRef();//State field Outer
        this.Submit = React.createRef();
    }
    maxLength(e) {
        console.log("asdsad")
        console.log(e.keyCode == 69)
        if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 69) {
            console.log("T_T")
            if (this.PhoneNumber.current.value.length == 10) {

                if (e.keyCode != 8) {
                    e.preventDefault()
                }
                if (window.getSelection().toString().length) {
                    this.PhoneNumber.current.value = String.fromCharCode(e.keyCode);
                }
            }
        }
        else {
            console.log("XX")
            e.preventDefault();
        }

    }
    onSubmit() {

        var check2 = [this.Firstname, this.Lastname, this.State, this.PhoneNumber, this.Email]
        var check = [];
        var i;
        var completecounter = 0;
        check[0] = this.Firstname.current.value != "" ? true : false;
        check[1] = this.Lastname.current.value != "" ? true : false;
        check[2] = this.State.current.value != null || this.State.current.value != "" || this.State.current.value != undefined ? true : false;
        if (this.State.current.value == 0) { check[2] = false }
        check[3] = this.validatePhonenumber(this.PhoneNumber.current)
        check[4] = this.validateEmail(this.Email.current)
        console.log("chek above")
        var x = document.querySelectorAll("label")
        for (i = 0; i < check.length; i++) {
            if (check[i] === false) {
                x[i].style = "border-bottom:solid red 2px;"

            }
            else {
                completecounter++;
                x[i].style = "border-bottom:none"


            }

        }

        if (completecounter == i) {

            console.log(this.props.formcomplete(true))
        }
    }
    checkName(e) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 8 || e.keyCode == 9 && e.target.value.length <= 10) {
        }
        else {
            e.preventDefault();
        }
    }

    validateEmail(e) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>() \[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (e.target === undefined) {
            if (regex.test(String(e.value).toLowerCase())) {


                return true;
            }
            else {

                return false;
            }
        }
        else {
            if (regex.test(String(e.target.value).toLowerCase())) {


                return true;
            }
            else {
                return false;
            }
        }
    }
    validatePhonenumber(e) {
        console.log('validate phone')
        if (e.value[0] != 9 && e.value[1] != 8 || e.value.length != 10) {
            return false
        }
        return true;
    }
    componentDidMount() {
        M.AutoInit();
        var x = this.props.getref()
          this.props.reset();
          x[0].style.bottom == "5000px" ?x[0].style.bottom = "0px" : x[0].style.bottom = "5000px"
        
 }   
    render() {
        return (
            <div style={{ padding: "0px", margin: "0px" }}>
                <div className="row">
                    <div className="col s12 m12 l12">
                        <span><p> Please enter contact details</p></span>
                    </div>
                </div>
                <div className="row">
                    <div className="input col s12 m12 l12">
                        <div>
                            <label className="active" id="firstname">FirstName</label>
                            <input
                                ref={this.Firstname}
                                onKeyDown={(e) => { this.checkName(e) }}
                                style={{ paddingBottom: "0px", marginBottom: "0px" }}
                                id="first_name1"
                                type="text"
                                className="validate"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input col s12 m12 l12">
                        <label className="active" id="lastname">LastName</label>
                        <input onKeyDown={(e) => { this.checkName(e) }} ref={this.Lastname} id="lastName" type="text" className="validate" />
                    </div>
                </div>

                <div className="row">
                    <div className="input col s12 m12 l12">
                        <label className="active" id="select">State</label>
                        <div ref={this.stateouter}>
                            <select className="select" style={{ width: "100%", border: "none", textDecoration: "none" }} ref={this.State}>
                                <option style={{ backgroundColor: "black" }} value="0">select</option>
                                <option value="1">Maharashtra</option>
                                <option value="2">Gujrat</option>
                                <option value="3">Kerala</option>
                                <option value="4">Tamil Nadu</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="input col s12 m12 l12">
                        <label className="active" id="phone">PhoneNo.</label>
                        <input
                            onKeyDown={(e) => { this.maxLength(e) }}
                            ref={this.PhoneNumber}
                            id="phone"
                            type="number"
                            className="validate"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input col s12 m12 l12">
                        <label className="active" id="email">email address</label>
                        <input
                            ref={this.Email}
                            onBlur={(e) => { this.validateEmail(e) }}
                            id="first_name2"
                            type="text"
                            className="validate"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input col s12 m12 l12">
                        <input
                            onClick={(e) => { e.preventDefault(); this.onSubmit() }}
                            ref={this.Submit}
                            className="submit"
                            type="submit"
                            style={{ position: "relative", left: "45%" }}
                            value="Submit" />
                    </div>
                </div>
                <div className="row" style={{ marginBottom: "50px" }}>
                </div>
            </div>
        )
    }

}
export class Form extends React.Component {
    constructor(props) {
        super(props)


    }
    render() {
        return (
            <div className="row">

                <div className="col m7 l7 s12">
                    <div className="container">
                        <ContextConsumer>{({
                            formcomplete, getref,reset
                             }) =>
                            <FormBody
                                reset={reset}
                                getref={getref}
                                formcomplete={formcomplete}
                            />}
                        </ContextConsumer>
                    </div>
                </div>
                <div className="col m5 s12 l5">
                    <ContextConsumer>
                        {({
                            getFormStatus,
                            addItem,
                            removeItem,
                            getItemTotal,
                            selected,
                            total,
                            items,
                            cart,
                            getList,
                     
                                   }) =>
                            <Shoppingkart
                           
                                cart={cart}
                               // getList={getList}
                                getFormStatus={getFormStatus}
                                addItem={addItem}
                                removeItem={removeItem}
                                getItemTotal={getItemTotal}
                                items={items}
                               // selected={selected}
                                total={total}
                            />}
                    </ContextConsumer>
                </div>
            </div>


        )
    }
}