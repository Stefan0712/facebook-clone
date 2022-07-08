import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app = firebase.initializeApp({
    
  apiKey: "AIzaSyCUFiTHPIWWz9HPGfs5X-NvdanqHZcTDIo",
  authDomain: "facebook-clone-4001a.firebaseapp.com",
  projectId: "facebook-clone-4001a",
  storageBucket: "facebook-clone-4001a.appspot.com",
  messagingSenderId: "523366412599",
  appId: "1:523366412599:web:145ddc54f5f707d6dfeab2",
  measurementId: "G-6GMGZ2K9VT"


})
export const auth = app.auth()
export default app;
