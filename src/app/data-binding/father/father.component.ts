import { Component, OnInit } from "@angular/core";
import { FirstService } from "src/app/first.service";

@Component({
  selector: "app-father",
  templateUrl: "./father.component.html",
  styleUrls: ["./father.component.css"]
})
export class FatherComponent implements OnInit {
  messageToChild;
  messageFromChild: string;

  // Estamos haciendo inyección del servicio en el constructor, sin hacer new
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {}

  responseFromChild(ev: string) {
    this.messageFromChild = ev;
  }
  onClick() {
    this.messageToChild = this.firstService.getMessage();
  }
}
