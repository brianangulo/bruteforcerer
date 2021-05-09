import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setPassword } from "../redux/slicer";
import { TextField } from "@material-ui/core";


function Home() {
    const dispatch = useDispatch();
    const password = useSelector((state) => state.slicer.password)
    
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
    );
}

export default Home;