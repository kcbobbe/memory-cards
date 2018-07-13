import firebase from 'firebase'
// import firebase from 'firebase/app' is better
import 'firebase/auth'
var config = {
  apiKey: 'AIzaSyB4IejRn-PCxezTfTlOU1DdkDE8cekxV4U',
  authDomain: 'memory-cards-5a4ad.firebaseapp.com',
  databaseURL: 'https://memory-cards-5a4ad.firebaseio.com',
  projectId: 'memory-cards-5a4ad',
  storageBucket: 'memory-cards-5a4ad.appspot.com',
  messagingSenderId: '652711141522'
}

firebase.initializeApp(config)

export default firebase
