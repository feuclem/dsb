import {Injectable} from '@angular/core'
import * as firebase from 'firebase'
import Firestore = firebase.firestore.Firestore

@Injectable()
export class FirebaseHttpService {

  firebaseApp: firebase.app.App
  firestore: Firestore

  constructor() {
  }

  init() {
    this.firebaseApp = firebase.initializeApp({
      apiKey: 'AIzaSyBPDEPrAHoJzcoxd6-IdTZdRTl53y5UAMM',
      authDomain: 'testdsb-ce1b2.firebaseapp.com',
      databaseURL: 'https://testdsb-ce1b2.firebaseio.com',
      projectId: 'testdsb-ce1b2',
      storageBucket: 'testdsb-ce1b2.appspot.com',
      messagingSenderId: '432776816247',
      appId: '1:432776816247:web:226fe14629544cacb90872',
      measurementId: 'G-YL484V80BZ'
    })

    this.firestore = this.firebaseApp.firestore()
  }

}
