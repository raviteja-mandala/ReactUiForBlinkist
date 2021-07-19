import React from 'react'
import { useReducer } from 'react';

function MyAccount() {
const [state, dispatch] = useReducer((state, action) => {
    return action.payload;
}, 5);
console.log(state);

    return (
        <div>
            <h7>My Account</h7>
        </div>
    )
}

export default MyAccount
