import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  ztsForm: FormGroup;


  loading = false;
  success = false;

  /* Submitting the Form */

  onSubmit() {

    this.loading = true;
    const formValue = this.ztsForm.value;
    try {
      console.log(formValue);
      this.success = true;
    } catch (err) {
      console.error(err)
    }
    this.loading = false;
  }

  get firstName() {
    return this.ztsForm.get('firstname')
  }

  get lastName() {
    return this.ztsForm.get('lastName')
  }
  get middleInitial() {

    return this.ztsForm.get('middleInitial')

  }
  get email() {

    return this.ztsForm.get('email')

  } get gender() {

    return this.ztsForm.get('gender')

  } get dateOfBirth() {

    return this.ztsForm.get('dateOfBirth')

  } get occupation() {

    return this.ztsForm.get('occupation')

  } get maritalStatus() {

    return this.ztsForm.get('maritalStatus')

  }


  constructor(private fb: FormBuilder) {
    this.ztsForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      middleInitial: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      maritalStatus: [null, [Validators.required]],

    })

  }

    ngOnInit(): void {
    }

  }

