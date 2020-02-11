import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example-directivas",
  templateUrl: "./example-directivas.component.html",
  styleUrls: ["./example-directivas.component.css"]
})
export class ExampleDirectivasComponent implements OnInit {
  colors: string[];
  show: boolean;
  constructor() {}

  ngOnInit() {
    this.colors = ["red", "blue", "yellow", "purple", "pink"];
    this.show = true;
    // this.show = false;
  }
}
