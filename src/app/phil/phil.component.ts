import { Component, OnInit, HostListener } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-phil',
  templateUrl: './phil.component.html',
  styleUrls: ['./phil.component.css'],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('800ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('800ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
    ])
  ]
})
export class PhilComponent implements OnInit {
  isVisible = false
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event);
    var element = document.getElementById("phil-end")
    console.log(element)
    // //this.elRef.nativeElement.querySelectorAll(".grid-row");
    var position = element.getBoundingClientRect();
    console.log("scrawwwwwwww!!!!!!")
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      this.isVisible = true
      console.log(this.isVisible + " is true");
    }
  } 

}
