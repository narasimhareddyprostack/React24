//import action types
import {GM,GN,GA} from './message.action'
let ininitialState = {
    msg:"Hello Rahul Gandhi"
}
let messageReducer = (state=ininitialState, action)=>{
    console.log(action)
    switch(action.type){
        case 'GM':
            return {msg:"Good Morning Rahul"}
        case 'GN':
            return {msg:"Good Night Rahul"}
        case 'GA':
            return {msg:"Lunch Time Buddy"}
        default:
            return state
    }
}

export {messageReducer}

//What is reducer?
//reducer is pure funciton, 
//it validate action type, 
//based on action types,It will update/create store
