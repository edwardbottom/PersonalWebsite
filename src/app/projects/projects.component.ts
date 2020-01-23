import { Component, OnInit, HostListener} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
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
export class ProjectsComponent implements OnInit {
  isVisible = false

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    console.log($event);
    var element = document.getElementById("phil-header")
    console.log(element)
    // //this.elRef.nativeElement.querySelectorAll(".grid-row");
    var position = element.getBoundingClientRect();
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      this.isVisible = true
    }
  } 

  

}
