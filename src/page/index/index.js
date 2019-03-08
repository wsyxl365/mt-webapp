import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import Container from "./Main/Container";

ReactDom.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.getElementById("root")
)
