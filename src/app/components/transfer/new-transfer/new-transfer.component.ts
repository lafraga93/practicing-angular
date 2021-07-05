import { Transfer } from './../../../models/transfer.model';
import { TransferService } from './../../../services/transfer.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./styles/new-transfer.component.scss']
})

export class NewTrasnferComponent {
  constructor(private transferService: TransferService) {}

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
