import firebase from 'firebase'


const firebaseConfig = {

    apiKey: "AIzaSyCg9j1EslPPB1jyQJMNaUhJXdE_pDB_CkY",
  
    authDomain: "whatsapp-2-9034f.firebaseapp.com",
  
    projectId: "whatsapp-2-9034f",
  
    storageBucket: "whatsapp-2-9034f.appspot.com",
  
    messagingSenderId: "32137237595",
  
    appId: "1:32137237595:web:ec621de0abde8009249b7e"
  
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app()

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};