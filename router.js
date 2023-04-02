const { initializeApp } = require ("firebase/app")
const { getFirestore } = require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyCojnKEQEABC3Q7tcA-pfFsikqVZXnG0FA",
    authDomain: "portfolio-erdodo.firebaseapp.com",
    projectId: "portfolio-erdodo",
    storageBucket: "portfolio-erdodo.appspot.com",
    messagingSenderId: "1019121622631",
    appId: "1:1019121622631:web:352e6d83e70112800efec2",
    measurementId: "G-YYT0JMMPZG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const { doc, getDoc,setDoc } = require("firebase/firestore");


const express = require("express");
const router = express.Router();
const profileJson = require("./profile.json");
router.get("/", async (req, res) => {
    const docRef = doc(db, "profile", "tr");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.json( docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})
router.get("/set", async (req, res) => {
    const docRef = doc(db, "profile", "en");
    await setDoc(docRef, profileJson.en);
})

module.exports = router;