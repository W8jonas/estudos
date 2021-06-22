import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAlLd2T2agpHkE3gGE_CEEsui9NvQGyAg0",
    authDomain: "letmeask-4c9dd.firebaseapp.com",
    databaseURL: "https://letmeask-4c9dd-default-rtdb.firebaseio.com",
    projectId: "letmeask-4c9dd",
    storageBucket: "letmeask-4c9dd.appspot.com",
    messagingSenderId: "369529701112",
    appId: "1:369529701112:web:bc4c5b272e137f27fcb10d"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const database = firebase.database()
