import React from 'react';
import Home from "./Home";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Main() {

    return (
        <React.Fragment>
            <NavBar />
            <Home />
            <Footer />
        </React.Fragment>
    );
}

export default Main;