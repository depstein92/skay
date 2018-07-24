import firebase from 'firebase';
require('dotenv').config({path: '../.env' });

 const myFirebase = firebase.initializeApp({
   apiKey: process.env.DB_APIKEY,
   authDomain: process.env.DB_AUTHDOMAIN,
   databaseURL: process.env.DB_DATABASEURL,
   projectId: process.env.DB_PROJECTID,
   storageBucket: process.env.DB_STORAGEBUCKET,
   messagingSenderId: process.env.DB_MESSAGINGSENDERID
});

console.log('apikey', process.env.apiKey);

const fireDatabase = myFirebase.database();

export default fireDatabase;
