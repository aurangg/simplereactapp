import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  render() {
    return (
      <div id="cssdiv">
        <button className={this.getSpanButtonClasses()}>
          Cart
          <span className={this.getSpanClasses()}>
            {this.props.counter.value}
          </span>
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getIncreaseButton()}
        >
          Add
        </button>
        <button
          id="del"
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className={this.getDeleteButton()}
        >
          Delete
        </button>
        <span>{this.props.counter.itemName}</span>
      </div>
    );
  }

  getDeleteButton() {
    let delbtn = "btn m-2 btn-danger";
    return delbtn;
  }

  getIncreaseButton() {
    let incbutton = "btn m-2 btn-success";
    return incbutton;
  }

  getSpanClasses() {
    let spanclasses = "badge badge-pill ml-2 badge-";
    spanclasses += this.props.counter.value === 0 ? "warning" : "light";
    return spanclasses;
  }

  getSpanButtonClasses() {
    let classes = "btn m-2 btn-";
    classes += this.props.counter.value === 0 ? "danger" : "primary";
    return classes;
  }
}

export default Counter;
