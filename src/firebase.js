import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTHe3TqbKWLxUGwxw5h38GRQQGuM6AZNk",
    authDomain: "yja-form-bdc05.firebaseapp.com",
    projectId: "yja-form-bdc05",
    storageBucket: "yja-form-bdc05.appspot.com",
    messagingSenderId: "457143119440",
    appId: "1:457143119440:web:fb3a7beab6bb41e2e32b55",
    measurementId: "G-BSREDE8XGZ"
};

firebase.initializeApp(firebaseConfig)

export default firebase;