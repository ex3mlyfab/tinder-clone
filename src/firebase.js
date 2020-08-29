import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCXuaVZJPLQLbqlHhyV9vbA2pONanjQAD4",
    authDomain: "tinder-clone-70ab6.firebaseapp.com",
    databaseURL: "https://tinder-clone-70ab6.firebaseio.com",
    projectId: "tinder-clone-70ab6",
    storageBucket: "tinder-clone-70ab6.appspot.com",
    messagingSenderId: "370153768001",
    appId: "1:370153768001:web:b10c59a3c82c8643e2f2c0",
    measurementId: "G-S3GXQMNB9C"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database