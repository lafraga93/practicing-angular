import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./styles/new-transfer.component.scss']
})

export class NewTrasnferComponent {
  @Output() whenDoTransfer = new EventEmitter<any>()

  amount: number = 0
  recipient: string = ''

  doTransfer(): void {
    console.log('Realizando nova transferência')

    this.whenDoTransfer.emit({
      amount: this.amount,
      recipient: this.recipient,
      date: new Date()
    })

    this.resetFields()
  }

  resetFields(): void {
    this.amount = 0
    this.recipient = ''
  }
}
