import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'my-app',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  public accountTypes!: any;
  public selectedAccountType: any;

  public form: FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    accountInfo: new FormGroup({
      account_type: new FormControl(),
    }),
  });

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.getAccountTypes();
    this.selectedAccountType = 'value 1';
  }

  public getAccountTypes() {
    this.formService.getAccountTypes().subscribe((response) => {
      this.accountTypes = response;
    });
  }

  public sendFormData() {
    console.log(this.form);
  }
  KnowValue() {
    console.log(this.form.get('accountInfo').controls['account_type'].value);
  }
}
