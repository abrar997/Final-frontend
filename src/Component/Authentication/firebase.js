import firebase from "firebase/compat/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj3sZsttD7jfblWu-8X_UJnXgZUyDFIIo",
  authDomain: "graduation-project-7e6f8.firebaseapp.com",
  projectId: "graduation-project-7e6f8",
  storageBucket: "graduation-project-7e6f8.appspot.com",
  messagingSenderId: "12637183318",
  appId: "1:12637183318:web:67125d8012dacb01058af7",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;