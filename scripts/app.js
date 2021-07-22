var firebaseConfig = {
  apiKey: "AIzaSyDeTIs9hdAOgs8NdfFvzbVy45_J1y6vhfw",
  authDomain: "curso-programadobr.firebaseapp.com",
  projectId: "curso-programadobr",
  storageBucket: "curso-programadobr.appspot.com",
  messagingSenderId: "56175453388",
  appId: "1:56175453388:web:c77b5e8acbb894fe4a0e69",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore(); // metodo que vai retorna uma referencia para o nosso banco de dados criado no nosso banco de dados no firebase

// ler todos os dados de uma coleção
db.collection("turmaA")
  .get()
  .then((snapshot) => {
    // snapshot "uma foto" de como esta o nosso banco de dados no momento
    snapshot.forEach((doc) => {
      // console.log(doc.id) Capturando o id para comparar com o do banco de dados para ter certeza que estou no caminho certo
      // console.log(doc.data())  capturando os dados
      let aluno = doc.data();
      console.log(aluno.nome, aluno.sobrenome);
    });
  });

// let docRef = db.collection("turmaA").doc("nhkBu4SxgZNzIyH5fh2x")

// docRef.get().then((doc) => {
//   let aluno2 = doc.data()

//   console.log(aluno2.nome)
// })

const TURMA = "turmaA";



// db.collection(TURMA).add({ // desse modo toda vez que eu ter refresh na pagina, vai ser adicionado o marcos no meu banco de dados do firebase
//   nome: "Marcos",
//   sobrenome: "Santos",
//   notas: {
//     nota1: 9.6,
//     nota2: 3.3
//   }
// }).then((doc) => {
//   console.log("Documento Inserido com Sucesso:", doc);
// }).catch((err) => {
//   console.log(err);
// })

// db.collection(TURMA)
//   .doc("AlunoNovo")
//   .set(
//     {
//     //  cidades: firebase.firestore.FieldValue.arrayUnion('Vitoria', 'Santos') // para add
//      cidades: firebase.firestore.FieldValue.arrayRemove('Vitoria')
//     },
//     { merge: true }
//   ) // merge vai fundir com algo que ja tem
//   .then((doc) => {
//     console.log("Documento inserido com Sucesso");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
