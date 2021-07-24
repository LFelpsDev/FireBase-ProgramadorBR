var firebaseConfig = {
  apiKey: "AIzaSyDeTIs9hdAOgs8NdfFvzbVy45_J1y6vhfw",
  authDomain: "curso-programadobr.firebaseapp.com",
  projectId: "curso-programadobr",
  storageBucket: "curso-programadobr.appspot.com",
  messagingSenderId: "56175453388",
  appId: "1:56175453388:web:c77b5e8acbb894fe4a0e69",
};

firebase.initializeApp(firebaseConfig);


const newUserEmail = "felipe-mara2003@hotmail.com"
const newUserPassword = "LFelpsDev";

let auth = firebase.auth()

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
  .then(user => {
    console.log(user);
  }).catch(error => {
    console.log(error);
  })



