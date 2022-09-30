import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions-third-part',
  templateUrl: './questions-third-part.component.html',
  styleUrls: ['./questions-third-part.component.scss']
})
export class QuestionsThirdPartComponent implements OnInit {

  infoForm : FormGroup | any;
  isFirstVisible: any;
  isSecondVisible : any;
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
    this.router.navigate(['/questions-part-four'])
    // if(this.infoForm.invalid)
    //   return;
    // else{
    //   this.router.navigate(['/questions-part-four'])
    // }
  }

  onPrevClick() {
    this.router.navigate(['/questions-part-two']);
    console.log("prev")
  }

}
