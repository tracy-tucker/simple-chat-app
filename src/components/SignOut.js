import React from 'react'
import { auth } from '../firebase'
import Button from 'react-bootstrap/Button'

function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
            <p>Chat it up!</p>
        </div>
    )
}

export default SignOut
