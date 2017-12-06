import { combineReducers, createStore } from "redux";


const userReducer = (state = {}, action) => {
	switch(action.type) {
		case "CHANGE_NAME" : {
			// console.log(action.payload)
			state = {...state, name:action.payload};
			break;
		}
		case "CHANGE_AGE": {
			state = {...state, age:action.payload};
			break;
		}
	}
	return state;
}

const tweetsReducer = function(state = {}, actions) {
	return state;
}


const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})

const store = createStore(reducers);
// 	user: {
// 		name:"Jai",
// 		age:33
// 	},
// 	tweets: []
// });

store.subscribe(() => {
	console.log("store changed " + 	JSON.stringify(store.getState()));
});

store.dispatch({type:"CHANGE_NAME", payload:"JD"});
store.dispatch({type:"INC", payload:3});
store.dispatch({type:"CHANGE_AGE", payload:34});