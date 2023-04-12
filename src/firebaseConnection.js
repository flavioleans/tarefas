import { initializeApp }from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth }from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBaeB-KULWQpw00QluAPWMQhQ8MU4FDCI0",
    authDomain: "curso-2ed60.firebaseapp.com",
    projectId: "curso-2ed60",
    storageBucket: "curso-2ed60.appspot.com",
    messagingSenderId: "205205351306",
    appId: "1:205205351306:web:cefda09cb1cbf555d1f673",
    measurementId: "G-8THV6LZCK4"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)

  export { db, auth };
