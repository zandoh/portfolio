import React, { Component } from "react";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.state.fields !== state.details) {
      return {
        details: props.location.state.fields
      };
    }
    return null;
  }

  render() {
    const { title } = this.state.details;
    return <h1>hiiii {title}</h1>;
  }
}

export default Detail;
