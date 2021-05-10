import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPassword } from "../redux/slicer";
import { TextField, Button } from "@material-ui/core";
import { bruteforce } from "bruteforcejs";

function Home() {
  const dispatch = useDispatch();
  const password = useSelector((state) => state.slicer.password);

  const handleChange = (value) => {
    dispatch(setPassword(value.target.value))
  }

  const handleBruting = () => {
    bruteforce("ABCabc", (result) => {
      console.log(result); // Display current bruteforce string
      if (result === "abBac") {
        // If current bruteforce string is right
        return true; // Return true => finish bruteforce
      }
    })
  }

  const handleSubmit = () => {
      console.log(password);
      handleBruting();
      dispatch(setPassword(""));
  }

  return (
    <div>
      <div>
        <p>Lets see how secure is your password?</p>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Home;
