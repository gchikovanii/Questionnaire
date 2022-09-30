import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions-second-part',
  templateUrl: './questions-second-part.component.html',
  styleUrls: ['./questions-second-part.component.scss']
})
export class QuestionsSecondPartComponent implements OnInit {
  infoForm : FormGroup | any;
  isFirstVisible: any;

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
    if(this.infoForm.invalid)
      return;
    else{
      this.router.navigate(['questions-part-three'])
    }
  }

  onPrevClick() {
    this.router.navigate(['/questions']);
  }
}
