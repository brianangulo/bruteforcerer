import React from "react";
import { TextField, Button } from "@material-ui/core";
import RevealText from "./RevealText";
import Article from "./Article.js";

function Content(props) {
  return (
    <div id="homeContent">
      <Article />
      <div className="container">
        <div className="row justify-content-center">
          <h4>How long will it take us to break your password?</h4>
          <br />
        </div>
        <div className="row justify-content-center">
          <h5>Test Below </h5>
        </div>
        <div className="row justify-content-center">
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Your Password"
              variant="outlined"
              onChange={props.handleChange}
              value={props.password}
            />
          </form>
        </div>
        <div>
          <div className="row justify-content-center">
            <Button
              hidden={props.submitToggle}
              variant="contained"
              color="primary"
              onClick={props.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
        <div>
          <div className="row justify-content-center">
            <RevealText
              timer={props.timer}
              enteredPass={props.enteredPass}
              toggleReveal={props.toggleReveal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
