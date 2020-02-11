import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Input() message: string; // abro una interfaz donde le permito a otro componente pasarme info
  @Output() reply = new EventEmitter<string>();

  ngOnInit() {
    // this.reply.emit('me has dicho '+ this.message );
  }
  onClick() {
    this.reply.emit(`me has dicho ${this.message}`);
  }
}
