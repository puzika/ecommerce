import {
   compose,
   createStore,
   applyMiddleware
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middlewares = [logger];
const composedEnhansers = compose(applyMiddleware(...middlewares));
//root reducer

export const store = createStore(rootReducer, undefined, composedEnhansers);
