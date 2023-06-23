import { PurchaseInterface } from 'interfaces/purchase';
import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  price: number;
  availability: number;
  event_id?: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  event?: EventInterface;
  _count?: {
    purchase?: number;
  };
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  event_id?: string;
}
