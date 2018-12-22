import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBWTyEovL12GaJ48-hahM5AW1y7MZL04LE",
    authDomain: "qapp-3.firebaseapp.com",
    databaseURL: "https://qapp-3.firebaseio.com",
    projectId: "qapp-3",
    storageBucket: "",
    messagingSenderId: "7168067593"
};
firebase.initializeApp(config);

export default firebase;