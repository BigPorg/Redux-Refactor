// create a redux shop/store here
// store vs shop
// store reminds me of storage, could be confusing naming, use shop instead

import { createStore } from "redux";
import reducer from "./reducers";
export default createStore(reducer);