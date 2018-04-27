//Combines all the reducers into a master reducer
//This will be what is passed to the store

import { combineReducers } from "redux";
import clock from "./clock.js";

const clockApp = combineReducers( { clock } );

export default clockApp;