import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_r9T_NX-5pdP3KfVCs4kCVbZbDCG95I0",
  authDomain: "cloudina-real.firebaseapp.com",
  projectId: "cloudina-real",
  storageBucket: "cloudina-real.appspot.com",
  messagingSenderId: "56398461124",
  appId: "1:56398461124:web:c6377736f0803471153191",
};

// to check if the app is already initialized because next.js has a peoblem in which it alreday render the page itself and on top of it if you do the same it messes shit up
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); //this process is called singleton pattern, u only initizalize once
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
