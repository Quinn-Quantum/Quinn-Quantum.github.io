import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanAndPaperComponent } from './pan-and-paper/pan-and-paper.component';
import { ProjekteComponent } from './projekte/projekte.component';


const routes: Routes = [
  { path: '', component: ProjekteComponent },
  {path: 'projekte', component: ProjekteComponent},
  {path: 'pnp', component: PanAndPaperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
