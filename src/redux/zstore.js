import {createStore} from "redux";
import add_reducer from "./zreducer";
const cs = {
    cars:[
        {
            "cp":"cat",
            "jg":99,
            "zl":100
        },
        {
            "cp":"fish",
            "jg":99,
            "zl":100
        }
    ]
}

let s_store = createStore(add_reducer);
export {s_store,cs};