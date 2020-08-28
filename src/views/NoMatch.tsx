import React, { Component } from "react";

export class NoMatch extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          <span className="smcp">URL</span> doesn't exist...
        </h1>
      </div>
    );
  }
}
