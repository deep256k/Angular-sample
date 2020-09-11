import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  detailsForm: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.inItForm();
  }
  private inItForm() {
    this.detailsForm = new FormGroup({
      places: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      parked: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
        this.customValidate.bind(this),
      ]),
    });
  }
  onSubmit() {
    this.router.navigate(['/dashboard']);
  }

  customValidate(control: FormControl): { [value: string]: boolean } {
    if (control.value > 10) {
      return { lessValue: true };
    } else {
      return null;
    }
  }
}
