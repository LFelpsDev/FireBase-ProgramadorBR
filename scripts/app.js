var firebaseConfig = {
  apiKey: "AIzaSyDeTIs9hdAOgs8NdfFvzbVy45_J1y6vhfw",
  authDomain: "curso-programadobr.firebaseapp.com",
  projectId: "curso-programadobr",
  storageBucket: "curso-programadobr.appspot.com",
  messagingSenderId: "56175453388",
  appId: "1:56175453388:web:c77b5e8acbb894fe4a0e69"
}

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore(); // metodo que vai retorna uma referencia para o nosso banco de dados criado no nosso banco de dados no firebase


// ler todos os dados de uma coleção
db.collection("turmaA").get().then((snapshot) => { // snapshot "uma foto" de como esta o nosso banco de dados no momento
  snapshot.forEach((doc) => {
    // console.log(doc.id) Capturando o id para comparar com o do banco de dados para ter certeza que estou no caminho certo
    // console.log(doc.data())  capturando os dados
    let aluno = doc.data();
    console.log(aluno.nome)
    
    
  })
})



let docRef = db.collection("turmaA").doc("nhkBu4SxgZNzIyH5fh2x")

docRef.get().then((doc) => {
  let aluno2 = doc.data()

  console.log(aluno2.nome)
})