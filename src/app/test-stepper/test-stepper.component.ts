import { Component, OnInit } from '@angular/core';
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
  title = 'angular-export-to-excel';

  dataForExcel = [];

  empPerformance = [
    { ID: 10011, NAME: "A", DEPARTMENT: "Sales", MONTH: "Jan", YEAR: 2020, SALES: 132412, CHANGE: 12, LEADS: 35 },
    { ID: 10012, NAME: "A", DEPARTMENT: "Sales", MONTH: "Feb", YEAR: 2020, SALES: 232324, CHANGE: 2, LEADS: 443 },
    { ID: 10013, NAME: "A", DEPARTMENT: "Sales", MONTH: "Mar", YEAR: 2020, SALES: 542234, CHANGE: 45, LEADS: 345 },
    { ID: 10014, NAME: "A", DEPARTMENT: "Sales", MONTH: "Apr", YEAR: 2020, SALES: 223335, CHANGE: 32, LEADS: 234 },
    { ID: 10015, NAME: "A", DEPARTMENT: "Sales", MONTH: "May", YEAR: 2020, SALES: 455535, CHANGE: 21, LEADS: 12 },
  ];

  constructor(private formBuilder: FormBuilder) {
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
    console.log(this.firstFormGroup.value)
  }
}
