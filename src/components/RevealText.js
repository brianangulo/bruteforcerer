import React from "react";

function RevealText(props) {
  if (props.toggleReveal) {
    return (
      <div className="text-center">
        <p style={{ fontWeight: "bold" }}>
          Your password has been BruteForced! <br />
        </p>
        <p>
          You entered: {props.enteredPass}. It took our algorithm {props.timer}
          ms to BruteForce It. <br />{" "}
        </p>
        <p style={{ fontStyle: "italic" }}>
          *Longer times mean more secure passwords.
        </p>
      </div>
    );
  } else {
    return <div />;
  }
}

export default RevealText;
