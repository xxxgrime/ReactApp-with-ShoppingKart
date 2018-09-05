import React from 'react'
import ReactDom from 'react-dom'
import { Buttonx } from './addremovebutton'
import { AppProvider, ContextConsumer } from './app'
import { ShoppingKart } from './shoppingkarts'

const FormBody = (props) => {
    return (
        <div style={{ padding: "0px", margin: "0px", border: "solid red 1px" }}>
            <div className="row t">
                <div className="xxx col s5 push-s1 push-m1 push l1 l5 push-s1 push-m1 push l1 m5 push-s1 push-m1 push l1">
                    <span><p> Please enter contact details</p></span>
                </div>
            </div>
            <div className="row t">
                <div className="xxx input col s5 push-s1 push-m1 push l1 m5 push-s1 push-m1 push l1 l5 push-s1 push-m1 push l1">
                    <div>
                        <label className="active">FirstName</label>
                        <input style={{ paddingBottom: "0px", marginBottom: "0px" }} id="first_name2" type="text" className="validate" />
                    </div>
                </div>
            </div>
            <div className="row t">
                <div className="xxx input col s5 push-s1 push-m1 push l1 m5 push-s1 push-m1 push l1 l5 push-s1 push-m1 push l1">
                    <label className="active">LastName</label>
                    <input id="first_name2" type="text" className="validate" />
                </div>
            </div>
            <div className="row t">
                <div className="xxx input col s5 push-s1 push-m1 push l1 m5 push-s1 push-m1 push l1 l5 push-s1 push-m1 push l1">
                    <label className="active">City</label>
                    <input id="first_name2" type="text" className="validate" />
                </div>
            </div>
            <div className="row t">
                <div className="xxx input col s5 push-s1 push-m1 push l1 m5 push-s1 push-m1 push l1 l5 push-s1 push-m1 push l1">
                    <label className="active">PhoneNo.</label>
                    <input id="phone" type="number" className="validate" />
                </div>
            </div>
            <div className="row t">
                <div className="xxx input col s5 push-s1 push-m1 push l1 m5 push-s1 push-m1 push l1 l5 push-s1 push-m1 push l1">
                    <input type="submit" style={{ position: "relative", left: "5 push-s1 push-m1 push l10%" }} value="Submit" />
                </div>
            </div>
        </div>
    )
}
export class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({ completed: false, page: true })
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <div style={{ border: "solid black 1px" }} className="col s7 m7 l7">
                    <div>
                        <FormBody/>
                    </div>
                </div>
                <div className="col s5 m5 l5">
                    <ContextConsumer>
                        {({ addItem, removeItem, getitemtotal, selected, total, items }) => <ShoppingKart completed={this.state.completed} page={this.state.page} addItem={addItem} removeItem={removeItem} getitemtotal={getitemtotal} items={items} selected={selected} total={total} />}
                    </ContextConsumer>
                </div>
            </div>
            </div>
        )
    }
}