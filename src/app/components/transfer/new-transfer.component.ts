import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls: ['./styles/new-transfer.component.scss']
})

export class NewTrasnferComponent {
  @Output() whenTransfer = new EventEmitter()

  amount: number = 0;
  recipient: string = '';

  transfer() {
    console.log('Realizando nova transferência')

    // console.log('Valor: ', this.amount)
    // console.log('Destino: ', this.recipient)

    this.whenTransfer.emit({
      amount: this.amount,
      recipient: this.recipient
    })
  }
}
