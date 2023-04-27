import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';

const routes: Routes = [
 {path :'Tecnology', component: FirstComponent},
  {path:'Tecnologys', component:SecondComponent,},
  {path:'Books', component:ThirdComponent,},
  {path:'**', component:ForthComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
