import { Injectable, NgZone } from '@angular/core';
import { User } from "../models/user";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  items: any;
  login: boolean;

  constructor(
    public router: Router,  
    public ngZone: NgZone ,
  ) { 
  }

  // Sign in with email/password
  /*  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
         this.router.navigate(['layout']);
        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }  

  // Sign up with email/password
  
SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }


  // Sign out 
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('UserDetails');
      this.router.navigate(['sign-in']);
    })
  }    */

}