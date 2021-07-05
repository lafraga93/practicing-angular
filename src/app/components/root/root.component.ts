import { TransferService } from './../../services/transfer.service';
import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./styles/root.component.scss']
})

export class RootComponent {
  constructor(
    private transferService: TransferService
  ) {}

  getTransfer($event: any): void {
    this.transferService.add($event)
  }
}
