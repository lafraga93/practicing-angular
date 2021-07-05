import { NewTrasnferComponent } from './components/transfer/new-transfer/new-transfer.component';
import { TransfersComponent } from './components/transfer/transfers/transfers.component';
import { NgModule } from "@angular/core";
import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: 'transfers', pathMatch: 'full' },
  { path: 'new-transfer', component: NewTrasnferComponent },
  { path: 'transfers', component: TransfersComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
