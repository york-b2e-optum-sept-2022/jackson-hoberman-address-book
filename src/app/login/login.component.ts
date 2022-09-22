import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IAccount} from "../interfaces/IAccount";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() onLogin = new EventEmitter<IAccount>();

  username!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log(this.username),
    console.log(this.password),
    this.onLogin.emit({"username": this.username, "password": this.password})
  }
}
