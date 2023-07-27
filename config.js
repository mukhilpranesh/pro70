import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBn2fsyB9JmOrSiYv0_-2MlcS06fgKn7rk",
    authDomain: "e-library-5c82d.firebaseapp.com",
    projectId: "e-library-5c82d",
    storageBucket: "e-library-5c82d.appspot.com",
    messagingSenderId: "792613914878",
    appId: "1:792613914878:web:afb922f6932901d2ff7daf"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;