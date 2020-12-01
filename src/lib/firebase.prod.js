import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'

//seed database


const config = {
    apiKey: "AIzaSyAsu4l-rK_lwoBwe2Ig_UfGb_D3gParJV4",
    authDomain: "wgn-v2.firebaseapp.com",
    databaseURL: "https://wgn-v2.firebaseio.com",
    projectId: "wgn-v2",
    storageBucket: "wgn-v2.appspot.com",
    messagingSenderId: "508320980213",
    appId: "1:508320980213:web:0dffee4649232c1af1b9bc",
    measurementId: "G-T2Y10HNW2D"
}

const firebase = Firebase.initializeApp(config)

seedDatabase(firebase)

export { firebase }