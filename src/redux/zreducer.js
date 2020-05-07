import { cs } from "./zstore";
function add_reducer(state = cs, action) {
    switch (action.type) {
        case "newsta":
        return {...state,cars: [...state.cars, action.payload]}
        default: return state;
    }
}

export default add_reducer;