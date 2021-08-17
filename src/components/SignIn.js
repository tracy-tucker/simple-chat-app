import React from 'react'
import firebase from 'firebase'
import Button from 'react-bootstrap/Button';

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
    }
    return (
        <div>
            <Button onclick={signInWithGoogle()}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn
