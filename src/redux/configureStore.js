import { applyMiddleware, createStore } from "redux";
import { reducer } from "./reducers/reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true,
    diff: true
})

export const store = createStore(reducer, applyMiddleware(thunk, logger))