import React from 'react'

import requiredAuth from './requiredAuth'

function Dashboard(){
    return (
        <p>Hi</p>
    )
}

export default requiredAuth(Dashboard) 