import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ChuckService } from '../chuck.service';


@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {
  // message: string;
  // sub: Subscription;

  publicQuote: Observable<string>;
  privateQuote: Observable<string>;

  constructor(private chuckService: ChuckService) { }

  ngOnInit(): void {
    this.getPublicQuote();
    this.getPrivateQuote();

  }

  // getPublicQuote() {
  //   this.sub = this.chuckService.getInfo().subscribe(
  //     response => {
  //       this.message = response;
  //       console.log(this.message);
  //       return this.message;
  //     },
  //     error => console.log(error)
  //   );
  // }

  getPublicQuote() {
    this.publicQuote = this.chuckService.getInfo();
  }


  getPrivateQuote() {
    this.privateQuote = this.chuckService.getPrivateInfo();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

}
