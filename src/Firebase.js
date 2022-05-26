import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRAIeqnsnGHpG1PgMa4grQClTV8xiASUY",
    authDomain: "react-test-c6b03.firebaseapp.com",
    projectId: "react-test-c6b03",
    storageBucket: "react-test-c6b03.appspot.com",
    messagingSenderId: "454287339298",
    appId: "1:454287339298:web:af281f50cd0785f9c2ff7b",
    measurementId: "G-24M6BZ579C"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;