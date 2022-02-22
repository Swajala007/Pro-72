import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB3Y8D7tUyoOddi6GjqAbLi2qLruUVBp6s",
  authDomain: "b123-d0c7b.firebaseapp.com",
  projectId: "b123-d0c7b",
  storageBucket: "b123-d0c7b.appspot.com",
  messagingSenderId: "23691347568",
  appId: "1:23691347568:web:4300d33f87e341a7ecd6b5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
