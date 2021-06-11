import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-stepper',
  templateUrl: './test-stepper.component.html',
  styleUrls: ['./test-stepper.component.css']
})
export class TestStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;

  firestore = this.store.collection('firestore').valueChanges({idField: 'id'})

  constructor(private formBuilder: FormBuilder, private store: AngularFirestore) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      DOB: [null, Validators.required],
      gender: [null, Validators.required],
      occupation: [null, Validators.required],
      maritalStatus: [null, Validators.required],
      addressOne: [null, Validators.required],
      addressTwo: [null, Validators.required],
      city: [null, Validators.required],
      zipCode: [null, Validators.required],
      country: [null, Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  submit() {
    this.store.collection(this.firstFormGroup.value)
    console.log(this.firstFormGroup.value)
  }
}
