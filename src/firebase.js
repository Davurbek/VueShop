import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

  // var firebaseConfig = {
  //   apiKey: "AIzaSyCO2iKMnMhOrXdeThGfyjg2_JzM4fCMY-o",
  //   authDomain: "vue-shop-8e98a.firebaseapp.com",
  //   projectId: "vue-shop-8e98a",
  //   storageBucket: "vue-shop-8e98a.appspot.com",
  //   messagingSenderId: "754933936210",
  //   appId: "1:754933936210:web:624f71d5aa380697fe6f8b",
  //   measurementId: "G-3YJLZD2RJJ"
  // };
  const firebaseConfig = {
    apiKey: "AIzaSyBjzYtvaudp7sx_oLpdHdiPmc4raRQPKiQ",
    authDomain: "vue-shop-f23be.firebaseapp.com",
    projectId: "vue-shop-f23be",
    storageBucket: "vue-shop-f23be.appspot.com",
    messagingSenderId: "862326682298",
    appId: "1:862326682298:web:c718135c1eb002d8904883",
    measurementId: "G-Q3S6E538B5"
  };
  
    const fb = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore()

   export {fb, db}
  // firebase.analytics();

 