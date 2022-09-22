import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../interfaces/IContact";

@Component({
  selector: 'app-conact-list',
  templateUrl: './conact-list.component.html',
  styleUrls: ['./conact-list.component.css']
})
export class ConactListComponent implements OnInit {

  @Input() list!: IContact[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
  }

}
