import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  nameFormControl: FormControl = new FormControl(null);
  ageForm: FormControl = new FormControl(null);



  constructor() { }

  ngOnInit(): void {
  }

  addAge() {

  }
}
