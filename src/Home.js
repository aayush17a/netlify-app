import React from 'react';
import {UserContext} from "./App";
import {useContext} from "react";
import axios from 'axios';




function Home() {
    let {user} = useContext(UserContext);

    return   <div>
            <h1>{user ? user.displayName : undefined}</h1>
            <h1>{user ? user.uid : undefined}</h1>
            <button onClick={function(){
                axios.get('https://cryptic-tundra-19337.herokuapp.com/alive').then(function(response){
                    console.log(response);

                }).catch(function(error){
                    console.log(error);

                })
            }}> I am Alive </button>

        </div>
    
        
        

        

      
        
        
  

                

    

    
}

export default Home
