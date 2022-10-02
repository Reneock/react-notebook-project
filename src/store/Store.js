import { legacy_createStore as createStore } from "redux";
import notebooksReducer from "../reducers/notebooksReducer";

let store = createStore(notebooksReducer);

export default store;