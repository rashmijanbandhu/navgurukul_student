// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  
  apiKey: "AIzaSyD3oWBQMfypPBKtKrUTyiGI5k42VQlVMto",
  authDomain: "student-52f93.firebaseapp.com",
  projectId: "student-52f93",
  storageBucket: "student-52f93.appspot.com",
  messagingSenderId: "83420038658",
  appId: "1:83420038658:web:9b69b1d21330713b83891b"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
