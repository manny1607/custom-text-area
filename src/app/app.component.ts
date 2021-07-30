import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  appForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    desc: this.fb.control('')
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.appForm);
  }

  get desc() {
    return this.appForm.get('desc') as FormControl;
  }

}
