import React, { useContext, useEffect} from 'react'


import {UserContext} from "./App"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {firebase} from "./utils/firebase";


const Login = () => {

    let {user,setUser} = useContext(UserContext);

    useEffect(function()
        {
            firebase.auth().onAuthStateChanged((user) => {
                setUser(user);

                
              });
          

        }, );

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
          
        ],
      };
    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            width:"100vw",
            minHeight:"100vh",
            background:"grey",
            alignItems:"center",
            justifyContent:"center"
            
        }}>
        <div style={{
            display:"flex",
            flexDirection:"row",
            width:"300px",
            padding: "100px",
            alignItems:"center",
            justifyContent:"center",
            background:"black",
            borderRadius:"20px"
         }} >
            {user ? ( <button onClick={function(){
                firebase.auth().signOut();
            }}>Logout</button>

            ) : (
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            )

             }
            </div>
           


            
        </div>
    )
}

export default Login
