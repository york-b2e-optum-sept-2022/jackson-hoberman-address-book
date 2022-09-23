import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-conact-list',
  templateUrl: './conact-list.component.html',
  styleUrls: ['./conact-list.component.css']
})
export class ConactListComponent implements OnInit {

  @Input() list!: IContact[];
  @Output() newContact = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
  }

  onClick() {
    this.newContact.emit()
  }

}
