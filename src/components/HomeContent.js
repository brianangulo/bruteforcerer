import React from "react";
import { TextField, Button } from "@material-ui/core";
import RevealText from "./RevealText";
import Article from "./Article.js";

function Content(props) {
  return (
    <div id="homeContent" className="container">
      <Article />
      <div className="justify-content-cen">
        <h4>How long will it take us to break your password?</h4>
        <h5>Test Below </h5>
      </div>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Your Password"
          variant="outlined"
          onChange={props.handleChange}
          value={props.password}
        />
      </form>
      <div>
        <Button
          hidden={props.submitToggle}
          variant="contained"
          color="primary"
          onClick={props.handleSubmit}
        >
          Submit
        </Button>
      </div>
      <div>
        <RevealText
          timer={props.timer}
          enteredPass={props.enteredPass}
          toggleReveal={props.toggleReveal}
        />
      </div>
    </div>
  );
}

export default Content;
