import React from "react";
import { TextField, Button } from "@material-ui/core";
import RevealText from "./RevealText";
import Article from "./Article.js";
import hackerGif from "../shared/giphy.gif";
import bgImg from "../shared/bgimg.jpg";
import Error from "./Error";

function Content(props) {
//regexp
const regex = /^[A-Za-z0-9]{0,4}$/;
  return (
    <div id="homeContent" style={{ backgroundImage: `url(${bgImg})` }}>
      <Article />
      <div className="container">
        <div className="row gutter-sm p-2 justify-content-center">
          <img hidden={props.isMobile} src={hackerGif} alt="Hacker gif" />
        </div>
        <div className="row gutter-sm justify-content-center">
          <h4>How long will it take us to break your password?</h4>
          <br />
        </div>
        <div className="row justify-content-center">
          <h5>Test Below: </h5>
        </div>
        <div className="row gutter-sm justify-content-center">
          <form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Your Password"
              variant="outlined"
              onChange={props.handleChange}
              value={props.password}
              error={!regex.test(props.password)}
            />
          </form>
        </div>
        <Error isHidden={regex.test(props.password)} />
        <div>
          <div className="row gutter-sm justify-content-center">
            <Button
              hidden={!regex.test(props.password)}
              variant="contained"
              color="primary"
              onClick={props.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
        <div>
          <div className="row gutter-sm justify-content-center">
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
