import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./mainStyles";
import Typist from "react-typist";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { styling, classes } = this.props;
    const typistWords = [
      "Front-End",
      "Back-End",
      "Internet of Things",
      "Web Applications"
    ];
    const typistList = typistWords.map((word, index) => {
      return index < typistWords.length - 1 ? (
        <span key={`typist-item-${index}`}>
          {word}
          <Typist.Backspace
            count={word.length}
            delay={500}
            style={{ marginLeft: "1px" }}
          />
        </span>
      ) : (
        <span key={`typist-item-${index}`}>{word}</span>
      );
    });

    return (
      <main className={`${styling} ${classes.main}`}>
        <h2>Projects</h2>
        <div className={classes.typistContainer}>
          Developing projects pertaining to{" "}
          <Typist className={classes.typist}>{typistList}</Typist>
        </div>
      </main>
    );
  };
}

export default injectSheet(styles)(Main);
