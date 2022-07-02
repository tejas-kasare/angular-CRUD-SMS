import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD-SMS';
  constructor(private modalService: NgbModal )
  {

  }

  open() {
    const modalRef = this.modalService.open(AddDialogComponent,{backdrop:'static'});
    modalRef.componentInstance.name = 'World';
  }
}
