import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          Navbar{" "}
          <span className={this.getSpanClasses()}>
            {this.props.totalCounters}
          </span>
          <span style={{ fontSize: 13 }}>Selected Phones</span>
        </div>
      </nav>
    );
  }
  getSpanClasses() {
    let spanclasses = "badge badge-pill ml-2 badge-";

    return spanclasses;
  }
}

export default NavBar;
