import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Login from './Login';
import Chats from './Chats';

import { AuthProvider } from "../contexts/AuthContext"
function App() {

  return (
    <div>
      <chats/>
        <Router>
          <AuthProvider>

            <Routes>
              <Route exact path="/chats" element={<Chats/>}/>
              <Route exact path="/" element={<Login/>}/>
            </Routes>
          
          </AuthProvider>
        </Router>
          
    </div>
  );
}

export default App;
