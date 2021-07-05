import { Transfer } from './../models/transfer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferService {
  private url: string = "http://localhost:3000/transfers"

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url)
  }

  add(transfer: Transfer): Observable<Transfer> {
    return this.httpClient.post<Transfer>(this.url, transfer)
  }
}
