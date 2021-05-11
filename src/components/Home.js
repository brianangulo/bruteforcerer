import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPassword,
  setTimer,
  setEnteredPas,
  setToggleReveal,
} from "../redux/slicer";
import { TextField, Button } from "@material-ui/core";
import { chars } from "../shared/chars";
import RevealText from "./RevealText";

const bruteforce = require("bruteforcejs");

function Home(props) {
  //dispatcher
  const dispatch = useDispatch();
  //state variables
  const password = useSelector((state) => state.slicer.password);
  const timer = useSelector((state) => state.slicer.timer);
  const enteredPass = useSelector((state) => state.slicer.enteredPass);
  const toggleReveal = useSelector((state) => state.slicer.toggleReveal);

  //handles change on the form
  const handleChange = (value) => {
    dispatch(setPassword(value.target.value));
  };

  //Keeping it all together for better perfomance bruteforcing algorithm on submit
  const handleSubmit = () => {
    console.log(password);
    //Controling toggle for reveal text
    dispatch(setToggleReveal(true));
    //Setting timer
    const bfInit = performance.now();
    bruteforce(
      chars,
      (result) => {
        if (result === password) {
          const bfEnd = performance.now();
          dispatch(setEnteredPas(result));
          dispatch(setTimer((bfEnd - bfInit).toFixed(2)));
          console.log(
            `The last result is: ${result} and time is ${(
              bfEnd - bfInit
            ).toFixed(2)}ms`
          );
          return true;
        }
      },
      4
    );
    dispatch(setPassword(""));
  };

  return (
    <div>
      <div>
        <h3>Lets see how secure is your password?</h3>
      </div>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Your Password"
          variant="outlined"
          onChange={handleChange}
          value={password}
        />
      </form>
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div>
        <RevealText timer={timer} enteredPass={enteredPass} toggleReveal={toggleReveal} />
      </div>
    </div>
  );
}

export default Home;
