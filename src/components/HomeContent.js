import React from 'react';
import { TextField, Button } from "@material-ui/core";
import RevealText from "./RevealText";

function Content(props) {
    return (
      <div id="homeContent" className="container">
        <div>
          <h3>Lets see how secure is your password?</h3>
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
          <Button variant="contained" color="primary" onClick={props.handleSubmit}>
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