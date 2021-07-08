import firebase from 'firebase';



const config = {
    apiKey: "AIzaSyAnSJV7gRmICKoRNwp0Oy77517rletTFEY",
    authDomain: "fir-login-4df6a.firebaseapp.com",
    projectId: "fir-login-4df6a",
    storageBucket: "fir-login-4df6a.appspot.com",
    messagingSenderId: "339091710395",
    appId: "1:339091710395:web:ccd4f37947e3f2e900249e"
  };
  firebase.initializeApp(config);

  export {firebase}