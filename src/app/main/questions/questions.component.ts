import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  infoForm : FormGroup | any;
  firstName : string | any;
  lastName : string | any;
  userEmail : string | any;
  fName : string | any;
  lName : string | any;
  uEmail : string | any;
  constructor(private fb :FormBuilder, private router: Router)
  {
    this.infoForm = this.fb.group({
      firstname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(56),Validators.pattern('^[a-zA-Z \-\']+')]],
      lastname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(56),Validators.pattern('^[a-zA-Z \-\']+')]],
      email: ['',[this.ValidateEmail]],
    })
  }

  ngOnInit(): void {
    this.getValues();

  }

  onSubmit() {
    if(this.infoForm.invalid)
      return;
    else{
      localStorage.setItem('firstname',this.infoForm.value.firstname);
      localStorage.setItem('lastname',this.infoForm.value.lastname);
      localStorage.setItem('email',this.infoForm.value.email);
      this.router.navigate(['/questions-part-two']);
    }
  }
  ValidateEmail(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value && !control.value.endsWith("@redberry.ge")) {
      return { 'emailIsInvalid': true };
    }
    return null;
  }

  getValues(){
    this.fName = localStorage.getItem('firstname');
    this.lName = localStorage.getItem('lastname');
    this.uEmail = localStorage.getItem('email');
    if(this.fName !== null && this.lName !== null &&this.uEmail !== null){
      this.firstName = localStorage.getItem('firstname');
      this.lastName = localStorage.getItem('lastname');
      this.userEmail = localStorage.getItem('email');
    }
    else{
      this.firstName = "";
      this.lastName = "";
      this.userEmail = "";
    }
  }

}
