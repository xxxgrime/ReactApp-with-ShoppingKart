import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from './navbar.js'
import { Listofitems } from './itemlist'
import { ShoppingKart } from './shoppingkarts'
import { data } from './data'
import Route from 'react-router-dom/Route'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Form } from './form'


const Mycontext = React.createContext();
export class AppProvider extends React.Component {
    constructor(props) {

        super(props)
        var i = 0;
        var x = []
        while (i < data.length) { x.push(0); i++ }
        this.state = ({ itemnone: true, item: x, total: 0 })

    }
    addItem(e, f) {
        var x = this.state.item;
        x[e]++;
        this.setState({ item: x, total: this.state.total += f, itemnone: false });
        console.log(this.state)

    }
    removeItem(e, f) {

        var x = this.state.item;
        x[e] == 0 ? x[e] = 0 : x[e]--;
        this.state.total - f == 0 ? this.setState({ item: x, total: 0, itemnone: true }) : this.setState({ item: x, total: this.state.total -= f, itemnone: false })

    }
    getitemlist() {
        var x = this.state.item;
        return x
    }
    getitemtotal(e) {
        var x = this.state.item[e];
        return x

    }
    gettotal() {
        var x = this.state.total;
        return x
    }
    render() {

        return (
            <Mycontext.Provider value={{ addItem: this.addItem.bind(this), removeItem: this.removeItem.bind(this), getitemtotal: this.getitemtotal.bind(this), selected: this.getitemlist(), items: data, total: this.gettotal() }}>
                {this.props.children}
            </Mycontext.Provider>
        )
    }
}
export var ContextConsumer = Mycontext.Consumer;

const App = () => {
    return (
        <div className="row">
            <div className="col s12 m7 l7">
                <div>
                    <ContextConsumer>
                        {({ addItem, removeItem, getitemtotal, items }) => <Listofitems addItem={addItem} removeItem={removeItem} getitemtotal={getitemtotal} items={items} />}
                    </ContextConsumer>
                </div>
            </div>
            <div className="col s12 m5 l5">
                <div>
                    <ContextConsumer>
                        {({ addItem, removeItem, getitemtotal, selected, total, items }) => <ShoppingKart addItem={addItem} removeItem={removeItem} getitemtotal={getitemtotal} items={items} selected={selected} total={total} />}
                    </ContextConsumer>
                </div>
            </div>
        </div>
    )
}
export const Main = () => {
    return (
        <div className="container">
            <Router>
                <div>
                    <Navbar />
                    <Route path="/" exact strict render={
                        () => {
                            return (<App />)
                        }
                    } />
                    <Route path="/checkout" exact strict render={
                        () => {
                            return (<Form />)
                        }
                    } />
                </div>
            </Router>
        </div>
    )
}
