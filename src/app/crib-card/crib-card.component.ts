import { Component, OnInit, Input } from '@angular/core';
// import { Typecast } from './../typecast';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: any;
  @Input('stype') stype: any;
  
  constructor() { }
 

  ngOnInit() {
  }

}
