import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { NewTrasnferComponent } from './components/transfer/new-transfer/new-transfer.component';
import { RootComponent } from './components/root/root.component';
import { TransfersComponent } from './components/transfer/transfers/transfers.component';
import { registerLocaleData } from '@angular/common';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    NewTrasnferComponent,
    RootComponent,
    TransfersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "pt"},
    {provide: DEFAULT_CURRENCY_CODE, useValue: "BRL"}
  ],
  bootstrap: [RootComponent]
})

export class AppModule { }
