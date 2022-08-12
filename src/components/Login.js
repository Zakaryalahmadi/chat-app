import {useContext, useState} from 'react'
import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import "firebase/app";

import { auth } from '../firebase'
import '../styles/Login.css'

import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


// export const useAuth = () => useContext();

function Login(){

    // const [userInfo, setUserInfo] = useState({});

    const signInWithGoogle = ()=>{
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        
    }

    

    //A faire plus tard
    // const signInWithFacebook = ()=>{

    // }

  return (
    <div id="wrapper">
        <div id="login">
            <div id="login-2">
                <h1 id='title'>Bienvenue !</h1>
                <div 
                    className='login-btn google'
                    onClick={signInWithGoogle}
                >
                    <GoogleOutlined /> Connectez vous avec google
                </div>
                <div className='login-btn facebook'>
                    <FacebookOutlined /> Connectez vous avec facebook
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
