import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
  // e inyectamos el servicio predefinido del router
  constructor(private firstService: FirstService, private router: Router) {}

  ngOnInit(): void {}

  responseFromChild(ev: string) {
    this.messageFromChild = ev;
  }
  onClick() {
    this.messageToChild = this.firstService.getMessage();
  }

  goToDirectivas(directivas) {
    this.router.navigate(["directivas"]);
  }
}
