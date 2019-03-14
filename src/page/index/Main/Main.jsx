import React, { Component } from "react";

import BottomBar from "../BottomBar/BottomBar";
import Home from "../Home/Home";

// import { connect } from "react-redux";

export default class Main extends Component {
    render(){
        return (
            <div>
                <Home/>
                <BottomBar/>
            </div>
        )
    }
}
