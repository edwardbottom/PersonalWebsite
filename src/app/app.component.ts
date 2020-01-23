import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMobile = false
  title = 'PersonalWebsite';

  @HostBinding('@.disabled') private disabled = this.isMobile;
  ngOnInit(){
    if(screen.width < 1300){
      this.isMobile = true
      this.disabled = true
    }    
  }
}
