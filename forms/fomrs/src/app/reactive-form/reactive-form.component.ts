import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

/*
* Reactive forms são formulários criados dentro do próprio componente
*
* Setup of form model -> Explicit, created in component class
* Data model          -> Structured and immutable
* Data                -> flow	Synchronous
* Form                -> validation	Functions
*
*
* FormControl tracks the value and validation status of an individual form control.
*
* FormGroup tracks the same values and status for a collection of form controls.
*
* FormArray tracks the same values and status for an array of form controls.
*
* ControlValueAccessor creates a bridge between Angular FormControl instances and native DOM elements.
*
* */
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveFormControl: FormControl | undefined;

  constructor() {
    let reactiveFormControl = new FormControl('');
  }

  ngOnInit(): void {
  }

}
