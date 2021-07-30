import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-text-area',
  templateUrl: './custom-text-area.component.html',
  styleUrls: ['./custom-text-area.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomTextAreaComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CustomTextAreaComponent,
      multi: true
    }
  ]
})
export class CustomTextAreaComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() noMoreThanThree: boolean;
  @Input() hasEmptyError: boolean;

  textAreaFrom = this.fb.group({
    textAreaInput: this.fb.control('')
  });

  _onChange = (_: any) => {};

  _onTouched = (_: any) => {};

  constructor(
    private fb: FormBuilder
  ) { }

  validate(control: AbstractControl): ValidationErrors {
    
    if (control.value.length > 3) {
      return {
        noMoreThanThree: control.value
      }
    }
    return null;
  }

  ngOnInit(): void {
    console.log('CustomTextArea');
    if (this.noMoreThanThree) {
      this.textAreaFrom.get('textAreaInput').setValidators(Validators.maxLength(3));
    }

    this.textAreaFrom.get('textAreaInput').valueChanges.subscribe(val => {
      this._onChange(val);
    })
  }
  writeValue(value: any): void {
    if (value) {
      this.textAreaFrom.get('textAreaInput').setValue(value);
    }
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

}
