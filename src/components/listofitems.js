import React from "react";
import ReactDOM from "react-dom";
import { Addremovebutton } from './addremovebutton'
import { Link } from 'react-router-dom'


export class Listofitems extends React.Component {
  constructor(props) {
    super(props)
    this.x = this.props.items
    this.y = this.props.collection
    this.state = ({ status: 0, list: this.props.items })

  }
  componentDidMount() {
    var x = this.props.getref()

  }
  greaterfirst(listx) {
    var counter = 0
    var flag = true;
    var temp = 0;
    var temp2 = 0;
    var secondaryflag = 0
    var xx = new Promise((resolve, reject) => {
      while (flag == true) {
        while (counter < this.x.length - 1) {
          if (this.x[counter].price < this.x[counter + 1].price) {
            temp = this.x[counter]
            temp2 = this.y[counter]

            this.y[counter] = this.y[counter + 1]
            this.y[counter + 1] = temp2
            this.x[counter] = this.x[counter + 1]
            this.x[counter + 1] = temp
            secondaryflag = 1;
          }
          counter++;
        }
        if (secondaryflag == 0) {
          flag = false;
        }
        counter = 0;

        secondaryflag = 0;
      }
      resolve("Done")
    })
    xx.then(() => {
      this.props.getList(this.props.collection)
      this.setState({ list: this.x })
    })
  }
  lowerfirst(listx) {
    var counter = 0
    var flag = true;
    var temp;
    var temp2 = 0;
    var secondaryflag = 0
    var xx = new Promise((resolve, reject) => {
      while (flag == true) {
        while (counter < this.x.length - 1) {
          if (this.x[counter].price > this.x[counter + 1].price) {
            temp = this.x[counter]

            temp2 = this.y[counter]
            this.y[counter] = this.y[counter + 1]
            this.y[counter + 1] = temp2
            this.x[counter] = this.x[counter + 1]
            this.x[counter + 1] = temp

            secondaryflag = 1;
          }
          counter++;

        }
        if (secondaryflag == 0) {
          flag = false;
        }
        counter = 0;
        secondaryflag = 0;
      }
      resolve("Done")
    })
    xx.then(() => {
      this.props.getList(this.props.collection)
      this.setState({ list: this.x })
    })
  }
  render() {
    var list = []
    var i = 0;
    while (i < this.state.list.length) {
      if (i == this.state.list.length - 1) {

        list.push(
          <li style={{
            marginBottom: "50px",
            paddingTop: "0px",
            paddingBottom: "0px",
            border: "none"
          }} key={i} className="collection-item">
            <div style={{
              borderLeft: "solid 1px black",
              borderRight: "solid 1px black",
              borderBottom: "solid 1px black",
              marginBottom: "0px"
            }}>
              <div style={{
                background: "black",
                color: "white",
                marginBottom: "1%"
              }}><b>{this.state.list[i].name}</b></div>
              <div className="title" >
                <div style={{
                  width: "90%"
                }}>
                  <div style={{
                    marginLeft: "10px",
                    float: "left"
                  }}>
                    <i>{this.state.list[i].comment}</i>
                  </div></div>
                <div style={{
                  float: "right",
                  marginRight: "1%",
                  display: "inline",
                }} id="xx" className="secondary-content">

                  <Addremovebutton
                    add={this.props.addItem}
                    remove={this.props.removeItem}
                    idx={this.state.list[i].id}
                    value={this.state.list[i].price}
                    total={this.props.getItemTotal(this.state.list[i].id)}
                  /></div><br /><br />
                <div style={{
                  paddingLeft: "10px"
                }}><b>{"$ " + this.state.list[i].price + " only"}</b></div>
                <div style={{ marginBottom: "10px" }}></div></div></div></li>
        )
        i++
      }
      else {

        list.push(
          <li style={{
            paddingTop: "0px",
            paddingBottom: "0px",
            border: "none"
          }}
            key={i}
            className="collection-item">
            <div style={{
              borderLeft: "solid 1px black",
              borderRight: "solid 1px black",
              borderBottom: "solid 1px black",
              marginBottom: "0px"
            }}><div style={{
              background: "black",
              color: "white",
              marginBottom: "1%"
            }}><b>{this.state.list[i].name}</b></div>
              <div className="title" >
                <div style={{ width: "90%" }}>
                  <div style={{
                    marginLeft: "10px",
                    float: "left"
                  }}>
                    <i>{this.state.list[i].comment}</i>
                  </div></div>
                <div style={{
                  float: "right",
                  marginRight: "1%",
                  display: "inline",
                }} id="xx" className="secondary-content">
                  <Addremovebutton
                    add={this.props.addItem}
                    remove={this.props.removeItem}
                    idx={this.state.list[i].id}
                    value={this.state.list[i].price}
                    total={this.props.getItemTotal(this.state.list[i].id)}
                  /></div><br /><br />
                <div style={{
                  paddingLeft: "10px"
                }}><b>{"$ " + this.state.list[i].price + " only"}</b></div>
                <div style={{
                  marginBottom: "10px"
                }}></div></div></div></li>
        )
        i++;
      }

    }

    return (
      <ul
        className="collection"
        style={{
          border: "none",
          marginBottom: "0px",
          paddingBottom: "0px"
        }}>
        <li
          style={{
            paddingTop: "0px",
            paddingBottom: "10px",
            border: "none"
          }}
          className="collection-item">
          <span
            style={{
              marginRight: "2%",
              float: "right"
            }}>
            <button
              className="arrow"
              onClick={(e) => { this.greaterfirst(e) }}
              style={{
                background: "silver",
                color: "black",
                border: "black solid 1px",
                fontSize: ".6em",
                marginRight: "10px"
              }}><b><b>
                <i
                  style={{
                    fontSize: "10px",
                    color: "black"
                  }}
                  className="material-icons">arrow_upward</i></b></b></button>
            <button
              className="arrow"
              onClick={(e) => { this.lowerfirst(e) }}
              style={{
                color: "black",
                fontSize: ".6em",
                background: "silver",
                border: "black solid 1px"
              }}><b>
                <b>
                  <i style={{
                    fontSize: "10px",
                    color: "black"
                  }}
                    className="material-icons">arrow_downward</i>
                </b>
              </b>
            </button>
          </span>
          <br />
        </li>{list}</ul>
    )
  }
}
