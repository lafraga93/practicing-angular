import { Transfer } from './../../../models/transfer.model';
import { TransferService } from './../../../services/transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./styles/transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  transfers: Transfer[] = []

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transferService.all().subscribe((transfers: Transfer[]) => {
      this.transfers = transfers
    })
  }
}
