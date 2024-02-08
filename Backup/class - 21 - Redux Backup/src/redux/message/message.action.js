//what is action?
//action is a function, it return object/actionable object
//action types
let GM='GM'
let GA='GA'
let GN ='GN'

//action
let gmAction=()=>{
    console.log("GM Action")
    return { type:GM}
}
let gnAction=()=>{
    console.log("GN Action")
    return { type:GN}
}

let gaAction = ()=>{
    return {type:GA}
}
export {gmAction,gnAction,gaAction,GM,GN,GA}