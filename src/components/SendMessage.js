import Button from 'react-bootstrap/Button'
import firebase from 'firebase'
import { db, auth } from '../firebase'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'

function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser
        
        await db.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <Form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                <Button type="submit">Send</Button>
            </Form>
        </div>
    )
}

export default SendMessage
