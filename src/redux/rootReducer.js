import {combineReducers} from "redux";

import contactsReducer from "./contacts/contactsReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
theme: themeReducer,
contactsRoot: contactsReducer,
})
export default rootReducer;