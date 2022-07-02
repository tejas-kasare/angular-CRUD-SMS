import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  studentform!:FormGroup
  closeResult = '';
  constructor(
    private formBuilder:FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  @Input() name!:string;
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
    console.log("hiiiiiiiii");
    alert("hiiii")
    
  }

}
