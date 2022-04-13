import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBTHkj7H_M5bt8psdYDYKyXBuqcvFVnwS4",
	authDomain: "slack-clone-fd1f4.firebaseapp.com",
	projectId: "slack-clone-fd1f4",
	storageBucket: "slack-clone-fd1f4.appspot.com",
	messagingSenderId: "344334111208",
	appId: "1:344334111208:web:531d378fdb397b3f54145d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
