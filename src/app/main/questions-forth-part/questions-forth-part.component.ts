import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions-forth-part',
  templateUrl: './questions-forth-part.component.html',
  styleUrls: ['./questions-forth-part.component.scss']
})
export class QuestionsForthPartComponent implements OnInit {

  infoForm : FormGroup | any;
  isFirstVisible: any;
  isSecondValue : any;

  isVisible: any;
  isSelected: boolean = true;
  constructor(private fb :FormBuilder, private router: Router)
  {
    this.infoForm = this.fb.group({
      date: ['',Validators.required],
      count: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

      this.router.navigate(['/thanks'])
  }

  onPrevClick() {
    this.router.navigate(['/questions-part-three']);
  }
}

