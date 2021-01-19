export const logIn=(userId)=>{
    return {
        type:'LOG_IN',
        payload:userId
    }
}

export const logOut=()=>{
    return {
        type:'LOG_OUT',
    }
}
