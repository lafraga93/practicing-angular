export interface Transfer {
  id?: number | string;
  amount: number;
  recipient: string;
  date?: Date;
}
