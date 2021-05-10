import React from "react";

function RevealText(props) {
  if (props.toggleReveal) {
    return (
      <p>
        We guessed your password! It is: {props.enteredPass} and it took us this
        long: {props.timer}ms to guess it.
      </p>
    );
  } else {
    return <div />;
  }
}

export default RevealText;
