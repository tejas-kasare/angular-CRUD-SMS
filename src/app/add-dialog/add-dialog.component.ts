import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  studentform!:FormGroup
  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.studentform=this.formBuilder.group({
      name:['',Validators.required],
      gender:['',Validators.required],
      class:['',Validators.required],
      dob:['',Validators.required]
    })
  }

  submitData()
  {
    console.log('hii');
    
  }


  

}
