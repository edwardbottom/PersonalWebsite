import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css'],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
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
export class GraphicComponent implements OnInit {
  isVisible : boolean = false;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event);
    var element = document.getElementById("r-header")
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
