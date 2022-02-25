const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore/lite");

const firebaseConfig = require("../firebase.config.js");

const firebase = initializeApp(firebaseConfig);

module.exports = getFirestore(firebase);
