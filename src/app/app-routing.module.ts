import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarkdownViewComponent } from './markdown-view/markdown-view.component';

const routes: Routes = [
  {path:  'home', component: HomeComponent},
  {path: 'content/:path', component:MarkdownViewComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
