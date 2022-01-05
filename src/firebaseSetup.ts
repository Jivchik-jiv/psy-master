import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const app = initializeApp({
      apiKey: "AIzaSyDNiuTKz1A0uoOaAi_POIMl0OtLPwCUk6U",
    authDomain: "psy-master.firebaseapp.com",
    projectId: "psy-master",
    storageBucket: "psy-master.appspot.com",
    messagingSenderId: "1065106208791",
    appId: "1:1065106208791:web:b93fbb9485182dd13a8452",
    measurementId: "G-4SFTVMFKHB"
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

export const auth=getAuth(app);

export default app;
