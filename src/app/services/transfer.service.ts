import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TransferService {
  private transferItems: any[] = []

  get transfers(): any[] {
    return this.transferItems
  }

  add(transfer: any): void {
    this.transferItems.push(transfer)
  }
}
