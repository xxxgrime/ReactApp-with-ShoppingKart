import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from './navbar'
import { Listofitems } from './listofitems'
import { Shoppingkart } from './shoppingkarts'
import { data } from './data'
import { Form } from './form'
import { Mobkart } from './mobkart'
import { Orderplaced } from './orderplaced'



import Route from 'react-router-dom/Route'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Mycontext = React.createContext();
export var ContextConsumer = Mycontext.Consumer;
export class AppProvider extends React.Component {
    constructor(props) {

        super(props)
        var i = 0;
        var x = []

        var numberholder = 97;
        while (i < data.length) { x[i] = { id: i, count: 0 }; i++ }
        this.state = ({
            formstatus: false,
            item: x, total: 0,
            cart: [],
            page: "arrow_drop_down"
        })
        this.cartholder = [];

    }

    submitForward(reference){
       var xxx =new Promise((resolve,reject)=>{
           this.state.submit?this.setState({submit:reference}):this.state=this.state;
       })
       console.log("submit fowrar")
       console.log("inside the function submit")
       console.log(this.state.submit)
    }
    getSubmitForward(){
        return this.state.submit
    }
    reset() {
        this.setState({ page: "arrow_drop_down" })
    }
    getref() {
        if (this.state.moderef) {
            return [this.state.moderef]
        }
    }
    changePage() {
        this.state.page == "arrow_drop_down" ?
            this.setState({
                page: "arrow_drop_up"
            }) :
            this.setState({
                page: "arrow_drop_down"
            })
        console.log(this.state)

    }
    setref(ref, mob) {
        var xxx = new Promise((resolve, reject) => {

            this.setState({
                moderef: ref,

            })
            resolve("asdsa")
        }).then(() => {
            console.log("stat log")
            console.log(this.state)
        })
    }
    formcomplete(status) {

        if (status == true && this.state.formstatus == false) {
            this.setState({
                formstatus: true,

            })
        }
    }
    getFormStatus() {

        return this.state.formstatus;
    }
    getList(str) {
        var xx = new Promise((resolve, reject) => {
            this.setState({

                item: str,

            })
            resolve("Done")
        })
        xx.then(() => { console.log("State Set ") })

    }
    addItem(e, f) {
        var xxx = new Promise((resolve, reject) => {
            var x = this.state.item;
            for (var i = 0; i < this.state.item.length; i++) {
                if (this.state.item[i].id === e) {
                    this.state.item[i].count++;
                }
            }
            if (this.state.cart.length != 0) {
                if (this.cartholder.indexOf(e) == -1) {
                    this.cartholder.push(e)
                }
            }
            else {
                this.cartholder.push(e)
            }
            this.setState({
                formstatus: this.state.formstatus,
                //  item: x,
                total: this.state.total += f,
                cart: this.cartholder
            });
            resolve("123")
        })
        xxx.then(() => {
            console.log('upadated cart')
            console.log(this.state.cart)


        })


    }
    removeItem(e, f) {
        var xxx = new Promise((resolve, reject) => {
            var x = this.state.item;
            for (var i = 0; i < this.state.item.length; i++) {
                if (this.state.item[i].id === e && this.state.item[i].count != 0) {
                    this.state.item[i].count--;
                }
                if (this.state.item[i].count == 0 && this.state.item[i].id === e) {

                    var newxx = this.cartholder.indexOf(e)
                    if (newxx != -1) {
                        this.cartholder.splice(newxx, 1)

                    }
                }
            }
            this.setState({
                // item: x,
                total: this.state.total -= f,
                cart: this.cartholder
            });
            resolve("123")
        })
        xxx.then(() => {
            console.log('uodated cart')
            console.log(this.state.cart)


        })

    }
    getItemList() {
        var x = this.state.item;
        return x
    }

    getItemTotal(e) {
        for (var i = 0; i < this.state.item.length; i++) {
            if (this.state.item[i].id === e) {
                return this.state.item[i].count
            }
        }

    }
    getTotal() {
        var x = this.state.total;
        return x
    }

    render() {
        return (
            <Mycontext.Provider value={{
                getSubmitForward:this.getSubmitForward(),
                submitForward:this.submitForward.bind(this),
                reset: this.reset.bind(this),
                page: this.state.page,
                changePage: this.changePage.bind(this),
                setref: this.setref.bind(this),
                getref: this.getref.bind(this),
                getFormStatus: this.getFormStatus.bind(this),
                formcomplete: this.formcomplete.bind(this),
                collection: this.state.item,
                getList: this.getList.bind(this),
                cart: this.state.cart,
                addItem: this.addItem.bind(this),
                removeItem: this.removeItem.bind(this),
                getItemTotal: this.getItemTotal.bind(this),
                items: data,
                total: this.getTotal()
            }}>
                {this.props.children}
            </Mycontext.Provider>
        )
    }
}

const App = () => {

    return (
        <div>
            <div className="row">
                <Link className="buttonO" style={{ display: "none" }} to="/checkout" exact="true">
                    <div className="fixed-action-btn">
                        <i className="large material-icons">mode_edit</i>
                    </div>
                </Link>
                <div className="col s12 m7 l7">
                    <div>
                        <ContextConsumer>
                            {({
                                 getref,
                                addItem,
                                removeItem,
                                getItemTotal,
                                items,
                                getList,
                                collection,
                                submitForward
                                       }) =>
                                <Listofitems
                             
                                    getref={getref}
                                    collection={collection}
                                    getList={getList}
                                    addItem={addItem}
                                    removeItem={removeItem}
                                    getItemTotal={getItemTotal}
                                    items={items}
                                />}
                        </ContextConsumer>
                    </div>
                </div>
                <div className="col s12 m5 l5">
                    <div>
                        <ContextConsumer>
                            {({
                                getFormStatus,
                                cart,
                                addItem,
                                removeItem,
                                getItemTotal,
                                total,
                                items,
                                submitForward
                                 }) =><Shoppingkart
                                        submitForward={submitForward}
                                    getFormStatus={getFormStatus}
                                    cart={cart}
                                    addItem={addItem}
                                    removeItem={removeItem}
                                    getItemTotal={getItemTotal}
                                    items={items}
                                    total={total}
                                />}
                        </ContextConsumer>
                    </div>
                </div>
            </div>

        </div>
    )
}


export const Main = () => {

    return (
        <div>
            <Router>
                <div>
                    <div className="container">
                        <div>
                            <Navbar />
                            <Switch>
                                <Route path="/" exact strict render={
                                    () => {
                                        return (<App />)
                                    }
                                } />
                                <Route path="/checkout" exact strict render={
                                    () => {
                                        return (<Form />)
                                    }} />
                                <Route path="/orderplaced" exact strict render={
                                    () => {
                                        return (<ContextConsumer>{({ reset, getref }) => <Orderplaced getref={getref} reset={reset} />}</ContextConsumer>)
                                    }
                                } />
                            </Switch>
                        </div>
                    </div>
                    <Mobkart />
                </div>
            </Router>
        </div>
    )
}
