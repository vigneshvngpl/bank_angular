import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

//variable to store incoming data from parent
  @Input() childAcno:String|undefined


  //event creation
  //event name

  @Output() onCancel= new EventEmitter()
  @Output() onDelete=new EventEmitter()

  cancelDelete(){

    //emit is used to start an event
    this.onCancel.emit()
  }

  deleteConf(){
    this.onDelete.emit(this.childAcno)

  }

}
