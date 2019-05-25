import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0, itemName: "iPhones" },
      { id: 2, value: 0, itemName: "Google Pixel" },
      { id: 3, value: 0, itemName: "Huawei P30 Pro" },
      { id: 4, value: 0, itemName: "Samsung Galaxy S10+" }
    ]
  };

  handleIncrement = countervalue => {
    const obj3 = [...this.state.counters]; //cloning counters array and storing it obj3
    const index = obj3.indexOf(countervalue); //collecting index no of countervalue and storing it in index
    obj3[index] = { ...countervalue }; //I dont know what happened here
    obj3[index].value++; //Increment
    this.setState({ counters: obj3 });
  };

  handleReset = () => {
    const obj2 = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: obj2 });
  };

  handleDelete = counterid => {
    const index = this.state.counters[0];
    if (counterid === index.id) {
      return this.checkToPrint(true);
    } // Delete before this to add iPhones too
    const obj = this.state.counters.filter(c => c.id !== counterid);
    this.setState({ counters: obj });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
          <span>I wont let you delete iPhone ;)</span>
        </main>
        <div>{this.checkToPrint()}</div>
      </React.Fragment>
    );
  }
  checkToPrint() {
    if (this.checkToPrint === true) {
      return <h1>iPhones win</h1>;
    }
  }
}

export default App;
