import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() message: string; // abro una interfaz donde le permito a otro componente pasarme info
  @Output() reply = new EventEmitter<string>();

  ngOnInit() {}
  // Este método es para estar atentos a los cambios que hay dentro de los inputs
  ngOnChanges() {
    this.reply.emit(`me has dicho ${this.message}`);
  }
}
