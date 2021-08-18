import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {auth} from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  // useAuthState replaces firebase.auth().onAuthStateChange()
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
