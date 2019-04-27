import firebase from 'firebase';

const prodConfig = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};

const devConfig = {
    apiKey: "AIzaSyDZ9kHww6LAQF6ropPcp656YWuMF0CQM_g",
    authDomain: "test-25520.firebaseapp.com",
    databaseURL: "https://test-25520.firebaseio.com",
    projectId: "test-25520",
    storageBucket: "test-25520.appspot.com",
    messagingSenderId: "350897023474"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();