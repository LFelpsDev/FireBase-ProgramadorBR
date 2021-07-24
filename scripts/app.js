var firebaseConfig = {
  apiKey: "AIzaSyDeTIs9hdAOgs8NdfFvzbVy45_J1y6vhfw",
  authDomain: "curso-programadobr.firebaseapp.com",
  projectId: "curso-programadobr",
  storageBucket: "curso-programadobr.appspot.com",
  messagingSenderId: "56175453388",
  appId: "1:56175453388:web:c77b5e8acbb894fe4a0e69",
};

firebase.initializeApp(firebaseConfig);


let auth = firebase.auth();


let user = auth.currentUser;

function login() {
  let userEmail = "felipe-mara2003@hotmail.com";
  let userPassword = "789159";

  auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(() => {
    // local padrão, 
    //para indicar que vamos usar o login somente um pagina  SESSION,
    // NONE VAI DESLOGAR, So Serve 
    auth
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then((loggedUser) => {
        console.log(auth.currentUser);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }).catch(error => {
    console.log(error);
  })


}

login()

auth.onAuthStateChanged(user => {
  if (user){
    console.log(user)
  }else {
    console.log("Ningum Logado")
  }

  
})

function logout(){
  auth.signOut().then(() => {
    console.log('USUARIO DESLOGADO')
  }).catch(error => {
    console.log(error)
  })
}

setTimeout(login, 2000); // login para logar, logout para deslogar
