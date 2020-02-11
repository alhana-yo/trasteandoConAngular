import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-father",
  templateUrl: "./father.component.html",
  styleUrls: ["./father.component.css"]
})
export class FatherComponent implements OnInit {
  messageToChild: string;
  messageFromChild: string;
  constructor() {}

  ngOnInit(): void {}

  responseFromChild(ev: string) {
    this.messageFromChild = ev;
  }
  onClick() {
    // alert("Hello! I am an alert box!!");
    this.messageToChild = "Hola hijo";
  }
}
