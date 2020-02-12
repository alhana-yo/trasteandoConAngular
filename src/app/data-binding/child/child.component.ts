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
    // Es mejor trabajar con el subscribe antes que con el snapshot,
    // porque con el snapshot tenemos problemas a la hora de recuperar
    // información

    // this.id = this.activatedRoute.snapshot.params.curso;
    this.activatedRoute.params.subscribe(params => {
      this.id = params.curso;
    });

    // this.param = this.activatedRoute.snapshot.queryParams.param;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.param = queryParams.param;
    });
  }
  // Este método es para estar atentos a los cambios que hay dentro de los inputs
  ngOnChanges() {
    this.reply.emit(`me has dicho ${this.message}`);
  }
}
