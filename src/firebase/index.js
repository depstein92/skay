import firebase from 'firebase';
/*this file is in git ignore!!!!!*/

 const myFirebase = firebase.initializeApp({
  apiKey: "AIzaSyAMgC6DM3NAjVFCeFmtnAX2gfqFQMpaZ_o",
  authDomain: "skay-a1f4c.firebaseapp.com",
  databaseURL: "https://skay-a1f4c.firebaseio.com",
  projectId: "skay-a1f4c",
  storageBucket: "skay-a1f4c.appspot.com",
  messagingSenderId: "1018244305391"
});

const fireDatabase = myFirebase.database();

export default fireDatabase;
