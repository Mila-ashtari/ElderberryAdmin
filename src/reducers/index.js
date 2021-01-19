import {combineReducers} from 'redux'

const authReducer=(auth=false, action)=>{
 if (action.type=== 'LOG_IN'){
     return action.payload
 }
 return auth
}

export default combineReducers({
    auth: authReducer
})