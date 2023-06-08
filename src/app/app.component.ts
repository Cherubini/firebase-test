import { Component } from '@angular/core';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';
import { FirestoreService } from './services/firestore/firestore.service';
import { Manga } from './model/manga';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-test';

  mangas: Manga[]=[];



  constructor(private firestoreServ:FirestoreService, public auth:AuthService){
    this.firestoreServ.getManga('OP0GbjfPBc12Piv35glR').then(manga =>{
        console.log(manga);
        });

    this.firestoreServ.getMangas().then(mangasFromDb=>{
      for (let i = 0; i < mangasFromDb.length; i++) {
        const element = mangasFromDb[i];
        console.log('collection ',element.title);
      }
      this.mangas=mangasFromDb;
    })
  }


}
// .then(document =>{
//   if(document.exists()){
//     console.log(document.data());

//   }
// })
