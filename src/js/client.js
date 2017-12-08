import { applyMiddleware, createStore } from "redux";

const reducer = (state=0, action) => {
	if (action.type === "INC")
		return state+1;
	if (action.type === "DEC")
		return state-1;
	if (action.type === 'Z')
		throw new Error("Custom Error");
	return state;
}

const logger = (store) => (next) => (action) => {
	console.log("action fired:", action);
	// action.type="DEC"
	next(action);
}

const error = (store) => (next) => (action) => {
	try {
		next(action);
	} catch (e) {
		console.log("Ran into error. ", e)
	}
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
	console.log("store changed ", store.getState());
});

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"DEC"});
store.dispatch({type:"Z"});