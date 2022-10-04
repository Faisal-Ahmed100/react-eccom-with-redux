import handleCart from "./handleCart";
import { combineReducers } from "redux";
import handleCountAndUser from './count'

const rootReducer=combineReducers({
    handleCart,
    handleCountAndUser,
});

export default rootReducer;