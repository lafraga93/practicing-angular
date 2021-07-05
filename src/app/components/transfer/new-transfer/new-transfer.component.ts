import { Transfer } from './../../../models/transfer.model';
import { TransferService } from './../../../services/transfer.service';
import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./styles/new-transfer.component.scss']
})

export class NewTrasnferComponent {
  constructor(
    private transferService: TransferService,
    private router: Router
  ) {}

  amount: number = 0
  recipient: string = ''

  doTransfer(): void {
    console.log('Realizando nova transferência')

    const payload: Transfer = {
      amount: this.amount,
      recipient: this.recipient,
      date: new Date()
    }

    this.transferService.add(payload).subscribe(
      (response) => {
        console.log('[doTransfer]: Http response:', response)
        this.resetFields()
        this.router.navigateByUrl('transfers')
      },
      (error) => {
        console.log('[doTransfer]: Http POST error details:', error)
      }
    )
  }

  resetFields(): void {
    this.amount = 0
    this.recipient = ''
  }
}
