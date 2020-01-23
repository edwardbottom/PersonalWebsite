import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
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
        animate('1000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
    ])
  ]
})
export class ResumeComponent implements OnInit {
  isEducationVisible = false
  isExperienceVisible = false
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var educationElement = document.getElementById("education-header")
    var eduPosition = educationElement.getBoundingClientRect();

    // checking whether fully visible
    if(eduPosition.top >= 0 && eduPosition.bottom <= window.innerHeight) {
      this.isEducationVisible = true
    }

    var experienceElement = document.getElementById("experience-header")
    var exPosition = experienceElement.getBoundingClientRect();

    if(exPosition.top >= 0 && exPosition.bottom <= window.innerHeight) {
      this.isExperienceVisible = true
    }



  } 


}
