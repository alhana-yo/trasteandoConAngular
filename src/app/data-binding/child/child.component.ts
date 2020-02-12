import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  constructor(private activatedRoute: ActivatedRoute) {}
  @Input() message: string; // abro una interfaz donde le permito a otro componente pasarme info
  @Output() reply = new EventEmitter<string>();
  id: string;
  param: string;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.curso;
    this.param = this.activatedRoute.snapshot.queryParams.param;
  }
  // Este método es para estar atentos a los cambios que hay dentro de los inputs
  ngOnChanges() {
    this.reply.emit(`me has dicho ${this.message}`);
  }
}
