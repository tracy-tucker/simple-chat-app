import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'

function SendMessage() {
    const [msg, setMsg] = useState('')
    return (
        <div>
            <Form>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." />
                <Button>Send</Button>
            </Form>
        </div>
    )
}

export default SendMessage
