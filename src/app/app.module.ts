import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NewTrasnferComponent } from './components/transfer/new-transfer.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    NewTrasnferComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})

export class AppModule { }
