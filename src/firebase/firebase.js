import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

  firebase.initializeApp(config);
  const database = firebase.database();

export { firebase, database as default };




//Esta sirve para que podamos ver los que an borrado
//   database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   });

//Esta sirve para poder ver cuando hacen cambioes en algo
//   database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   });

  // database.ref('expenses').on('child_added', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val());
  // });

  //Esta sirve para poder ver cuando cambian los datos en tiempo real
//   database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   })
    // database.ref('expenses')
    // .once('value')
    // .then((snapshot)=>{
    //     const expenses = [];
    //     snapshot.forEach((childSnapshot)=>{
    //         expenses.push({
    //             id: childSnapshot.key,
    //             ...childSnapshot.val()
    //         });
    //     });
    //     console.log(expenses);
    // });



  // database.ref('expenses').push({
  //   description: 'Compra',
  //   note: '',
  //   amount: 1258, 
  //   createdAt: 9262181915
  // });


//   database.ref('notes/-LiKRSNfwGngZXKs9xuW').remove();

  //Crear registros en la base de datos
//   database.ref('notes').push({
//       title: 'Course topics',
//       body: 'React Native'
//   });

//   const firebaseNotes = {
//     notes: {
//         apodjpjd: {
//             title: 'Primera nota',
//             body: 'Esta es mi nota'
//         },
//         npwedmpaspm: {
//             title: 'Segunda nota',
//             body: 'Esta es mi nota'
//         }
//     }
//   };
//   const notes = [{
//     id: '12',
//     title: 'Primera nota',
//     body: 'Esta es mi nota'
//   },{
//     id: '1ss1',
//     title: 'Segunda nota',
//     body: 'Esta es mi nota'
//   }];

//   database.ref('notes').set(notes);
//   database.ref('notes')


//   database.ref().on('value', (snapshot)=>{
//     const val= snapshot.val();
//     console.log(`${val.name} es ${val.job.title} en ${val.job.company}`)
//   });

//   database.ref()
//   .once('value')
//   .then((snapshot)=>{
//     const val= snapshot.val();
//     console.log(val);
//   }).catch((e)=>{
//     console.log(e);
//   });

//Para crear
//   database.ref().set({
//       name: 'Maximiliano', 
//       age: 21,
//       stressLevel: 6,
//       job: {
//         title: 'Software developer',
//         company: 'Google'
//       },
//       isSingle: false,
//       location: {
//           city: 'Villahermosa',
//           country: 'Mexico'
//       }
//   }).then(()=>{
//     console.log('Data is saved!');
//   }).catch((error)=>{
//     console.log('Esto fallo', error);
//   });

//Para actualizar
//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   });

//Para borrar
// database.ref().remove().then(()=>{
//     console.log('Data removed');
// }).catch((error)=>{
//     console.log(error);
// })