import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ChuckService } from '../chuck.service';


@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {
  message: string;
  sub: Subscription;

  constructor(private service: ChuckService) { }

  ngOnInit(): void {
  }

  searchUsers() {
    this.sub = this.service.getInfo().subscribe(
      response => {
        return this.message = response;
      },
      error => console.log(error)
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
