export const Fname = (state ='tesfa' ,action) => {
   switch(action.type){
    case "NAME": 
    return action.payload
    default:
        return state
   }
}
export const Lname = (state ='melkamu' ,action) => {
   switch(action.type){
    case "LNAME": 
    return action.payload
    default:
        return state
   }
}
export const Mname = (state ='walle' ,action) => {
   switch(action.type){
    case "MNAME": 
    return action.payload
    default:
        return state
   }
}
export const Age = (state = 21 ,action) => {
   switch(action.type){
    case "AGE": 
    return action.payload
    default:
        return state
   }
}
export const Profession = (state ='Student' ,action) => {
   switch(action.type){
    case "PROFESSION": 
    return action.payload
    default:
        return state
   }
}