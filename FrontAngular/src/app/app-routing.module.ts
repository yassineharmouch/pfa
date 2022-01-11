import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TacheeListComponent } from './tachee-list/tachee-list.component';
import { CreateTacheeComponent } from './create-tachee/create-tachee.component';
import { UpdateTacheeComponent } from './update-tachee/update-tachee.component';
import { TacheeDetailsComponent } from './tachee-details/tachee-details.component';

const routes: Routes = [
  {path: 'tachees', component: TacheeListComponent},
  {path: 'create-tachee', component: CreateTacheeComponent},
  {path: '', redirectTo: 'tachees', pathMatch: 'full'},
  {path: 'update-tachee/:id', component: UpdateTacheeComponent},
  {path: 'tachee-details/:id', component: TacheeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
