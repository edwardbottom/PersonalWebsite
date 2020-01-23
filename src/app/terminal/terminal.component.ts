import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('800ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
    ])
  ]
})
export class TerminalComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    //this.currentState = "state2"
  }

}
