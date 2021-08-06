import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-second-reactive-form',
  templateUrl: './second-reactive-form.component.html',
  styleUrls: ['./second-reactive-form.component.css']
})
export class SecondReactiveFormComponent implements OnInit {
  personFormGroup = new FormGroup({
    firstName: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    age: new FormControl(null,[Validators.required, Validators.min(18)]),
  });

  result: any;


  constructor() {
  }

  get firstName() {
    return this.personFormGroup.get('firstName')
  }

  get lastName() {
    return this.personFormGroup.get('lastName')
  }

  get age() {
    return this.personFormGroup.get('age')
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.result = this.personFormGroup.value;
  }

}
