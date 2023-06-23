import { CustomerInterface } from 'interfaces/customer';
import { TicketInterface } from 'interfaces/ticket';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  customer_id?: string;
  ticket_id?: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  ticket?: TicketInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  ticket_id?: string;
}
