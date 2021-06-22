import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  constructor(private firestore: AngularFirestore) { }
  isLinear = false;


  form = new FormGroup({
    firstName: new FormControl(""),
    middleName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    DOB: new FormControl(""),
    gender: new FormControl(""),
    ethnicDetail: new FormControl(""),
    ethnic: new FormControl(""),
    specialAccomidations: new FormControl(""),
    occupation: new FormControl(""),
    maritalStatus: new FormControl(""),
    addressOne: new FormControl(""),
    addressTwo: new FormControl(""),
    city: new FormControl(""),
    zipCode: new FormControl(""),
    country: new FormControl(""),
    churchAttendance: new FormControl(""),
    ChurchName: new FormControl(""),
    churchLeadership: new FormControl(""),
    churchSize: new FormControl(""),
    churchRole: new FormControl(""),
    countryTwo: new FormControl(""),
    cityTwo: new FormControl(""),
    attendanceLength: new FormControl(""),
    statementPurpose: new FormControl(""),
    internetAccess: new FormControl(""),
    refferencePoint: new FormControl(""),
    anyoneStudyingNow: new FormControl(""),
    yearsOfBeingABeliever: new FormControl("")
  });


  //Firestore CRUD actions example
  createZtsForms(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("zts-forms")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }



  // updateCoffeeOrder(data) {
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .set({ completed: true }, { merge: true });
  // }

  // getCoffeeOrders() {
  //   return this.firestore.collection("coffeeOrders").snapshotChanges();
  // }

  // deleteCoffeeOrder(data) {
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }
}
