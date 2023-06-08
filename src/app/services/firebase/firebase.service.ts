import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

    // Your web app's Firebase configuration
    firebaseConfig = {
      apiKey: "AIzaSyCBfxcHf83zoLS6j1Q0ZZOWGZkdF76ooGE",
      authDomain: "progettino-carino.firebaseapp.com",
      projectId: "progettino-carino",
      storageBucket: "progettino-carino.appspot.com",
      messagingSenderId: "96319404245",
      appId: "1:96319404245:web:c4215187573a910e460a5c"
    };

     // Initialize Firebase
     app = initializeApp(this.firebaseConfig);

  constructor() { }
}
