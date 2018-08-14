import firebase from 'firebase';
/*this file is in git ignore!!!!!*/
 const myFirebase = firebase.initializeApp({
  apiKey: DB_APIKEY,
  authDomain: DB_AUTHDOMAIN,
  databaseURL: DB_DATABASEURL,
  projectId: DB_PROJECTID,
  storageBucket: DB_STORAGEBUCKET,
  messagingSenderId: DB_MESSAGINGSENDERID
});

const fireDatabase = myFirebase.database();

export default fireDatabase;
