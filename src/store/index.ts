/**
 * Store.
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { robotReducer } from './Reducers/RobotReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    robotState: robotReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}