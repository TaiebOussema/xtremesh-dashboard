import hostsReducer from './hostsReducer';
import authReducer from './authReducer';
import drawerReducer from './drawerReducer';

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
    hosts: hostsReducer,
    auth: authReducer,
    drawer: drawerReducer
});

export default rootReducer