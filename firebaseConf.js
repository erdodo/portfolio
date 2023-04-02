const { initializeApp } = require ("firebase/app")
const { getFirestore } = require("firebase/firestore");
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const { doc, getDoc,setDoc,deleteDoc } = require("firebase/firestore");
module.exports = {
    getData(collection, docId) {
        return new Promise(async (resolve, reject) => {
            const docRef = doc(db, collection, docId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                resolve(docSnap.data());
            } else {
                resolve({"message": "No such document!"});
            }
        })
    },
    setData(collection, docId, data) {
        return new Promise(async (resolve, reject) => {
            const docRef = doc(db, collection, docId);

                await setDoc(docRef, data);

            resolve(true)
        })
    },
    deleteData(collection, docId) {
        return new Promise(async (resolve, reject) => {
            const docRef = doc(db, collection, docId);
            await deleteDoc(docRef);
            resolve(true)
        })
    }
}