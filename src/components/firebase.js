// // firebase.js
// import { initializeApp } from 'firebase/app';


// //import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getFirestore, doc, updateDoc,getDocs } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, updateDoc, collection } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  //whj
// apiKey: "AIzaSyB895S5J_hbdj1XIgUHmYJl5NgfQH_CxT4",
// authDomain: "student-dd02d.firebaseapp.com",
// projectId: "student-dd02d",
// storageBucket: "student-dd02d.appspot.com",
// messagingSenderId: "939723084032",
// appId: "1:939723084032:web:90f4cea5d58b664736e3e5"
//rashmi.janbandhu
    apiKey: "AIzaSyD3oWBQMfypPBKtKrUTyiGI5k42VQlVMto",
    authDomain: "student-52f93.firebaseapp.com",
    projectId: "student-52f93",
    storageBucket: "student-52f93.appspot.com",
    messagingSenderId: "83420038658",
    appId: "1:83420038658:web:9b69b1d21330713b83891b"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

//export { firestore, collection, getDocs };
//export { firestore, doc, updateDoc,getDocs };
//export { firestore, doc, updateDoc, collection };
export { firestore, doc, updateDoc, collection, getDocs };


// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyD3oWBQMfypPBKtKrUTyiGI5k42VQlVMto",
//       authDomain: "student-52f93.firebaseapp.com",
//       projectId: "student-52f93",
//       storageBucket: "student-52f93.appspot.com",
//       messagingSenderId: "83420038658",
//       appId: "1:83420038658:web:9b69b1d21330713b83891b"
// };

// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// export { firestore };