

import './App.css';
import React, { useState,useEffect}from "react"
import Login from "./Login";
import Home from "./Home";
import {Switch, Route,} from "react-router-dom";
import {firebase} from "./utils/firebase"
import axios from "./utils/axios";






let UserContext = React.createContext();



function App() {
  let [user,setUser] = useState();

  useEffect(function(){
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user);

      if(user){
        user
        .getIdToken(/* forceRefresh */ true).then(function(idToken) {
          // Send token to your backend via HTTPS
          axios.defaults.headers['authorization'] = `Bearer ${idToken}`;
          console.log(axios.defaults.headers['authorization']);
        }).catch(function(error) {
          // Handle error
          console.log(error);
        });


      }else{

      }

    });
  },[]);
  return (
    <UserContext.Provider value={{user,setUser}}>
      <div className="App">
    <Switch>
            <Route path="/Login" exact>
            <Login />
            </Route>
            
            <Route path="/" exact>
              <Home />
            </Route>
    </Switch>
        
        
        

      </div>

    </UserContext.Provider>
    
  );
}

export  {App, UserContext};
