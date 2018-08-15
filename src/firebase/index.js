import firebase from 'firebase';
/*this file is in git ignore!!!!!*/
let h = process.env.DB_APIKEY;

 const myFirebase = firebase.initializeApp({
  apiKey: process.env.DB_APIKEY,
  authDomain: process.env.DB_AUTHDOMAIN,
  databaseURL: process.env.DB_DATABASEURL,
  projectId: process.env.DB_PROJECTID,
  storageBucket: process.env.DB_STORAGEBUCKET,
  messagingSenderId: process.env.DB_MESSAGINGSENDERID
});

const fireDatabase = myFirebase.database();

export default fireDatabase;
