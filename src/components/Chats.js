import {useEffect, useState, useRef} from 'react'
import { useNavigate } from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import {auth} from "../firebase";

import {useAuth} from "../contexts/AuthContext";
import axios from 'axios';

function Chats(){

    const history = useNavigate();

    const {user} = useAuth();

    const [loading, setLoading] = useState(true);

    // console.log(user)

    const handleLogout = async () =>{
        await auth.signOut();
        history('/')
    }

    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob() // contient l'image

        return new File([data],"userPhoto.jpg", {type:"image/jpeg"})
    } 

    useEffect(()=>{
        if(!user){
            history('/')
            return;
        }

        

    },[user,history])

    if(!user || loading) return (<div>Chargement... <button onClick={handleLogout}>Revenir</button></div>)

  return (
    <div id="chats">
        <div className="nav-bar">
            <div className="logo">
                chatApp
            </div>
            <div onClick={handleLogout} className="logout">
                Logout 
            </div>
        </div>

        <ChatEngine
			projectID='739de455-e9ec-429d-bc10-a37765052431'
			userName={user.email}
			userSecret={user.uid}
		/>
    </div>
  )
}

export default Chats
